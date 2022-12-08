import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { Post } from '../post/post.schema';

export type CommunityDocument = HydratedDocument<Community>;

@Schema()
export class Community {
    @Prop({ default: uuid, index: true })
    id: string;
    @Prop({ default: 'Community', required: true, unique: false })
    name: string;
    @Prop({ default: 'Description', required: true, unique: false })
    description: string;
    @Prop({
        default: [],
        type: [MongooseSchema.Types.ObjectId],
        ref: 'Post',
    })
    posts: Post[];
}

export const communitySchema = SchemaFactory.createForClass(Community);