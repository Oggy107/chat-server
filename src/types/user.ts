export interface UserLoginIncoming {
    email: string;
    password: string;
}

export interface UserSignupIncoming {
    email: string;
    username: string;
    password: string;

}
export interface UserOutgoing {
    id: string;
    username: string;
    email: string;
    hashedPassword: string;
    token: string;
}