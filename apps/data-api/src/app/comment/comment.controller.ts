import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Token } from '../auth/token.decorator';
import { InjectToken } from '../auth/token.decorator';
import { Comment } from './comment.schema';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
    constructor(private CommentService: CommentService) {};

    @Post()
    async createComment(
        @InjectToken() token: Token,
        @Body() body: Comment
    ): Promise<Comment> {
        return await this.CommentService.createComment(token, body);
    }
}