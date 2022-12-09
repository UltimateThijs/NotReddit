/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Token } from '../auth/token.decorator';
import { User as UserModel, UserDocument } from '../user/user.schema';
import { PostDocument, Post as PostModel } from './post.schema';
import { CommentDocument, Comment as CommentModel } from '../comment/comment.schema';
import { IPost } from '@not-reddit/data';
import { Community as CommunityModel, CommunityDocument } from '../community/community.schema';

@Injectable()
export class PostService {
    constructor(
        @InjectModel(PostModel.name)
        private postModel: Model<PostDocument>,
        @InjectModel(UserModel.name) private userModel: Model<UserDocument>,
        @InjectModel(CommunityModel.name) private communityModel: Model<CommunityDocument>
    ) {}

    async createPost(
        token: Token,
        post: IPost
    ): Promise<PostModel> {
        const community = await this.communityModel.aggregate([{ $match: { id: token.id } }]);
        const actualCommunity = await this.communityModel.findById(community)

        let newpost;
        try {
            newpost = new this.postModel({
                title: post.title,
                content: post.content,
                isNSFW: post.isNSFW
            });
            newpost.save()
            actualCommunity?.posts.push(newpost);
            actualCommunity?.save();
        } catch (error) {
            throw new HttpException(
                'Unable to create a post',
                HttpStatus.BAD_REQUEST
            );
        }
        return newpost;
    }
}
