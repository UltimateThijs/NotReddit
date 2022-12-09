import { Controller, Get } from '@nestjs/common';

@Controller('post')
export class PostController {
    @Get()
    async getPosts() {
        return 'posts';
    }
}