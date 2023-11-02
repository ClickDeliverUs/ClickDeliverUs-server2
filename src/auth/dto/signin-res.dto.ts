import { Expose } from 'class-transformer';

export class SignInResDto {
  uuid: string;
  id: string;
  password?: string;
  address?: string;
  tel?: string;
  name?: string;
  nickname: string;
  age?: number;
  gender?: number;
  createdDT?: Date;
  isAdult?: number;
  accessToken: string;
  refreshToken: string;

  constructor(
    uuid: string,
    id: string,
    password: string,
    address: string,
    name: string,
    nickname: string,
    tel: string,
    age?: number,
    gender?: number,
    createdDT?: Date,
    isAdult?: number,
  ) {
    this.uuid = uuid;
    this.name = name;
    this.nickname = nickname;
    this.id = id;
    this.tel = tel;
    this.password = password;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.createdDT = createdDT;
    this.isAdult = isAdult;
  }
  @Expose({ name: 'uid', toPlainOnly: false })
  uid?: number;
}
