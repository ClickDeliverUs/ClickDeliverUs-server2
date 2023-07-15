export class SignInResDto {
  uuid: string;
  id: string;
  password: string;
  address: string;
  tel: string;
  name: string;
  nickname: string;
  uid?: number;
  age?: number;
  gender?: boolean;
  createdDT?: Date;
  isAdult?: boolean;
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
    uid?: number,
    age?: number,
    gender?: boolean,
    createdDT?: Date,
    isAdult?: boolean,
  ) {
    this.uid = uid;
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
}
