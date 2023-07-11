//name, nickName, id, password, birth, address, tel, gender, isAdult
export class SignUpReqDto {
  name: string;
  nickName: string;
  id: string;
  password: string;
  age: number;
  birth: Date;
  address: string;
  tel: string;
  gender: boolean;
  isAdult: boolean;
  uuid: string;

  constructor(
    name: string,
    nickName: string,
    id: string,
    password: string,
    age: number,
    birth: Date,
    address: string,
    tel: string,
    gender: boolean,
    isAdult: boolean,
    uuid: string,
  ) {
    this.name = name;
    this.nickName = nickName;
    this.id = id;
    this.password = password;
    this.age = age;
    this.birth = birth;
    this.address = address;
    this.tel = tel;
    this.gender = gender;
    this.isAdult = isAdult;
    this.uuid = uuid;
  }
}
