export interface UserCredentials {
    emailAddress: string;
    password: string;
}

export interface UserRegistration extends UserCredentials {
    username: string;
}

export interface Token {
    token: string
}
