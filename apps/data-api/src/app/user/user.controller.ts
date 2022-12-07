import { Body, Controller, Get, HttpException, HttpStatus, Param, Put } from '@nestjs/common';

import { UserService } from './user.service';
import { User as UserModel } from './user.schema';

import { User } from '@not-reddit/data';
import { InjectToken, Token } from '../auth/token.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<UserModel[]> {
    return this.userService.getAll();
  }

  // this method should precede the general getOne method, otherwise it never matches
  @Get('self')
  async getSelf(@InjectToken() token: Token): Promise<UserModel> {
    const result = await this.userService.getOneByUUID(token.id);
    return result;
  }
  
  @Put(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() updatedUser: UserModel,
    @InjectToken() token: Token
  ): Promise<UserModel> {
    const user = await this.userService.getOneByUUID(token.id);
    if (user.roles.includes('admin')) {
      return await this.userService.updateOne(updatedUser);
    } else {
      throw new HttpException('Not allowed to do this action as a user', HttpStatus.FORBIDDEN);
    }
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<UserModel> {
    return this.userService.getOneByUUID(id);
  }
}
