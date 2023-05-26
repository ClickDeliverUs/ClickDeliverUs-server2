export declare class SignInResDto {
    uuid: string;
    id: string;
    password: string;
    address: string;
    name?: string;
    uid?: number;
    age?: number;
    gender?: boolean;
    createdDT?: Date;
    isAdult?: boolean;
    constructor(uuid: string, id: string, password: string, address: string, uid?: number, age?: number, name?: string, gender?: boolean, createdDT?: Date, isAdult?: boolean);
}
