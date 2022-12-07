export interface IUser {
    id: number;
    username: string;
    emailAddress: string;
    birthday: Date;
    karma: number;
    roles: string[];
}

export interface UserInfo extends UserIdentity {
    emailAddress: string;
}

export interface User extends UserInfo {
    username: string;
    emailAddress: string;
}

export interface UserIdentity {
    id: Id;
    username: string;
}

export type Id = string;
export type ResourceId = { id: Id };