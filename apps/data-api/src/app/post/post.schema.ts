import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, {
    Decimal128,
    Document,
    HydratedDocument,
    Schema as MongooseSchema,
} from 'mongoose';
import { v4 as uuid } from 'uuid';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
    @Prop({ default: uuid, index: true })
    id: string;
    @Prop({ default: 'Title', recuired: true, unique: false })
    title: string;
    @Prop({ default: 'Content', required: true, unique: false })
    content: string;
    @Prop({ default: false, required: true, unique: false })
    isNSFW: boolean;
}

export const postSchema = SchemaFactory.createForClass(Post);