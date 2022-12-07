export interface UserCredentials {
    emailAddress: string;
    password: string;
}

export interface UserRegistration extends UserCredentials {
    username: string;
    birthday: Date;
}

export interface Token {
    token: string
}
