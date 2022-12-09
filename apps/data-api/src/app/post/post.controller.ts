import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Token } from '../auth/token.decorator';
import { InjectToken } from '../auth/token.decorator';
import { Post as postSchema } from './post.schema';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private PostService: PostService) {};

    @Post()
    async createPost(
        @InjectToken() token: Token,
        @Body() body: postSchema
    ): Promise<postSchema> {
        return await this.PostService.createPost(token, body);
    }
}