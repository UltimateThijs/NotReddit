import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Token } from '../auth/token.decorator';
import { InjectToken } from '../auth/token.decorator';
import { Community } from './community.schema';
import { CommunityService } from './community.service';

@Controller('community')
export class CommunityController {
    constructor(private CommunityService: CommunityService) {};

    @Get()
    async getAll(@InjectToken() token: Token): Promise<Community[]> {
        console.log(token);
        return this.CommunityService.getAll(token);
    }

    @Post()
    async createCommunity(
        @InjectToken() token: Token,
        @Body() body: Community
    ): Promise<Community> {
        return await this.CommunityService.createCommunity(token, body);
    }

    @Get(':id')
    async getById(
        @Param() id: string,
        @InjectToken() token: Token
    ): Promise<Community> {
        return this.CommunityService.getOneById(id['id'], token);
    }
}