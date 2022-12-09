import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Token } from '../auth/token.decorator';
import { InjectToken } from '../auth/token.decorator';
import { Community } from './community.schema';
import { CommunityService } from './community.service';

@Controller('community')
export class CommunityController {
    constructor(private CommunityService: CommunityService) {};

    @Get()
    async getAll(): Promise<Community[]> {
        return this.CommunityService.getAll();
    }

    @Get(':id')
    async getById(
        @Param() id: string,
    ): Promise<Community> {
        return this.CommunityService.getOneById(id['id']);
    }

    @Post()
    async createCommunity(
        @InjectToken() token: Token,
        @Body() body: Community
    ): Promise<Community> {
        return await this.CommunityService.createCommunity(token, body);
    }
}