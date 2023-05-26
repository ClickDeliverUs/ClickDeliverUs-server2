/// <reference types="node" />
import { BaseEntity } from 'typeorm';
export declare class UserEntity extends BaseEntity {
    uid: number;
    uuid: Buffer;
    name: string;
    nickName: string;
    id: string;
    password: string;
    birth: Date;
    gender: boolean;
    address: string;
    createdDT: Date;
    isAdult: boolean;
}
