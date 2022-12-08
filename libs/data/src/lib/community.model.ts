import { IPost } from './post.model';

export interface ICommunity {
    id: string;
    name: string;
    description: string;
    posts: IPost[];
}