import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, {
    Decimal128,
    Document,
    HydratedDocument,
    Schema as MongooseSchema,
} from 'mongoose';
import { v4 as uuid } from 'uuid';
import { Comment } from '../comment/comment.schema';

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
    @Prop({
        default: [],
        type: [MongooseSchema.Types.ObjectId],
        ref: 'Comment',
    })
    comments: Comment[];
}

export const postSchema = SchemaFactory.createForClass(Post);