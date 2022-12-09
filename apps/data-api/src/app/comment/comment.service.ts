/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Token } from '../auth/token.decorator';
import { User as UserModel, UserDocument } from '../user/user.schema';
import { CommentDocument, Comment as CommentModel } from '../comment/comment.schema';
import { IComment } from '@not-reddit/data';
import { Post as PostModel, PostDocument } from '../post/post.schema';

@Injectable()
export class CommentService {
    constructor(
        @InjectModel(CommentModel.name)
        private commentModel: Model<CommentDocument>,
        @InjectModel(UserModel.name) private userModel: Model<UserDocument>,
        @InjectModel(PostModel.name) private postModel: Model<PostDocument>
    ) {}

    async createComment(
        token: Token,
        comment: IComment
    ): Promise<CommentModel> {
        const user = await this.userModel.aggregate([{ $match: { id: token.id } }]);
        const actualUser = await this.userModel.findById(user)

        let newcomment;
        try {
            newcomment = new this.commentModel({
                username: actualUser.username,
                content: comment.content,
                postTime: new Date()
            });
            newcomment.save()
            // actualCommunity?.posts.push(newcomment);
            // actualCommunity?.save();
        } catch (error) {
            throw new HttpException(
                'Unable to create a comment',
                HttpStatus.BAD_REQUEST
            );
        }
        return newcomment;
    }
}