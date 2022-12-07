import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User as UserModel, UserDocument } from './user.schema';

import { User } from '@not-reddit/data';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel.name) private userModel: Model<UserDocument>
    ) {}

  async getAll(): Promise<UserModel[]> {
    return this.userModel.find(
      {},
      {
        // id: 1,
        // username: 1,
        // emailAddress: 1,
        // birthday: 1,
        // karma: 1,
      }
    )
    .exec();
  }

  async getOne(userId: string): Promise<UserModel> {
    const pipelineUser = [{ $match: { id: Number(userId) } }];
    const users = await this.userModel.aggregate(pipelineUser);
    return users[0];
  }

  async getOneByUUID(userMongoId: string): Promise<UserModel> {
    const pipelineUser = [{ $match: { id: userMongoId } }];
    const users = await this.userModel.aggregate(pipelineUser);
    return users[0];
  }

  async updateOne(updatedUser: UserModel): Promise<UserModel> {
    const user = await this.userModel.find({ id: updatedUser.id });
    const output = await this.userModel.updateOne({ id: user[0].id}, [
      {
        $set: {
          username: updatedUser.username,
          birthday: updatedUser.birthday,
          roles: updatedUser.roles,
        },
      },
    ]);
    return user[0];
  }
  
  // async deleteOne() {
  //   
  // }
}
