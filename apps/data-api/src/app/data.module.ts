import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserService } from './user/user.service';

import { User, UserSchema } from './user/user.schema';
import { UserController } from './user/user.controller';
import { CommunityController } from './community/community.controller';
import { CommunityService } from './community/community.service';
import { Post, postSchema } from './post/post.schema';
import { Community, communitySchema } from './community/community.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Post.name, schema: postSchema }]),
    MongooseModule.forFeature([{ name: Community.name, schema: communitySchema }]),
  ],
  controllers: [UserController, CommunityController],
  providers: [UserService, CommunityService],
})
export class DataModule {}
