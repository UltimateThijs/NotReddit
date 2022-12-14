import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { v4 as uuid } from 'uuid';
import isEmail from 'validator/lib/isEmail';
import { Community, communitySchema } from '../community/community.schema'

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({default: uuid, index: true})
  id: string;

  @Prop({
    required: true,
    unique: true,
  })
  username: string;

  @Prop({
    required: true,
    default: [],
  })
  roles: string[];

  @Prop({
    required: true,
    validate: {
      validator: isEmail,
      message: 'should be a valid email address',
    }
  })
  emailAddress: string;

  @Prop({
    required: true,
    default: new Date,
  })
  birthday: Date;

  @Prop({
    required: true,
    default: 0,
  })
  karma: number;

  @Prop({
    required: true,
    default: [],
    type: [communitySchema],
  })
  communities: Community[];
}

export const UserSchema = SchemaFactory.createForClass(User);
