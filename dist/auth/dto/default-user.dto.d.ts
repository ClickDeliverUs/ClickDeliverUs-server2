export declare class DefaultUserDto {
    id: string;
    password: string;
    constructor(email: string, password: string);
}
export declare class SignInDto extends DefaultUserDto {
    tel: string;
    address: string;
    constructor(id: string, password: string, tel: string, address: string);
}
