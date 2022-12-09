import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, {
    Decimal128,
    Document,
    HydratedDocument,
    Schema as MongooseSchema,
} from 'mongoose';
import { v4 as uuid } from 'uuid';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
    @Prop({ default: uuid, index: true })
    id: string;
    @Prop({ default: 'Username', recuired: true, unique: false })
    username: string;
    @Prop({ default: 'Content', required: true, unique: false })
    content: string;
    @Prop({ default: new Date(), required: true, unique: false })
    postTime: Date;
}

export const commentSchema = SchemaFactory.createForClass(Comment);