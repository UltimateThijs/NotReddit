import { IComment } from './comment.model';

export interface IPost {
    id: string;
    title: string;
    content: string;
    isNSFW: boolean;
    comments: IComment[]
}