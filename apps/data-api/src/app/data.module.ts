import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserService } from './user/user.service';

import { User, UserSchema } from './user/user.schema';
import { UserController } from './user/user.controller';
import { CommunityController } from './community/community.controller';
import { CommunityService } from './community/community.service';
import { Community, communitySchema } from './community/community.schema';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { Post, postSchema } from './post/post.schema';
import { CommentController } from './comment/comment.controller';
import { CommentService } from './comment/comment.service';
import { Comment, commentSchema } from './comment/comment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Post.name, schema: postSchema }]),
    MongooseModule.forFeature([{ name: Community.name, schema: communitySchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: commentSchema }]),
  ],
  controllers: [UserController, CommunityController, PostController, CommentController],
  providers: [UserService, CommunityService, PostService, CommentService],
})
export class DataModule {}
