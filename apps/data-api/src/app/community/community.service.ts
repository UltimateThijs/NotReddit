import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Token } from '../auth/token.decorator';
import { User as UserModel, UserDocument } from '../user/user.schema';
import { CommunityDocument, Community as CommunityModel } from './community.schema';
import { PostDocument, Post as PostModel } from '../post/post.schema';
import { ICommunity } from '@not-reddit/data';

@Injectable()
export class CommunityService {
    constructor(
        @InjectModel(CommunityModel.name)
        private communityModel: Model<CommunityDocument>,
        @InjectModel(UserModel.name) private userModel: Model<UserDocument>
    ) {}

    async getAll(): Promise<CommunityModel[]> {
        return this.communityModel.find()
    }

    async getOneById(id: string): Promise<CommunityModel> {
        return this.communityModel.findOne({id: id})
    }

    async createCommunity(
        token: Token,
        community: ICommunity
    ): Promise<CommunityModel> {
        const user = await this.userModel.aggregate([{ $match: { id: token.id } }]);
        const actualUser = await this.userModel.findById(user)

        let newcommunity;
        try {
            newcommunity = new this.communityModel({
                name: community.name,
                description: community.description
            });
            newcommunity.save()
            actualUser?.communities.push(newcommunity);
            actualUser?.save();
        } catch (error) {
            throw new HttpException(
                'Unable to create a community',
                HttpStatus.BAD_REQUEST
            );
        }
        return newcommunity;
    }
}