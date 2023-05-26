export declare class SignUpReqDto {
    name: string;
    nickName: string;
    id: string;
    password: string;
    age: number;
    birth: string;
    address: string;
    tel: string;
    gender: boolean;
    isAdult: boolean;
    uuid?: string;
    constructor(name: string, nickName: string, id: string, password: string, age: number, birth: string, address: string, tel: string, gender: boolean, isAdult: boolean, uuid?: string);
}
