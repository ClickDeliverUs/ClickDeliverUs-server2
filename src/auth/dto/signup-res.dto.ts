export class SignUpResDto {
  uid: number;
  uuid: string;
  name: string;
  id: string;
  tel: string;
  password: string;
  age: number;
  gender: boolean;
  address: string;
  createdDT?: Date;
  isAdult: boolean;

  constructor(
    uid: number,
    uuid: string,
    name: string,
    id: string,
    tel: string,
    password: string,
    age: number,
    gender: boolean,
    address: string,
    createdDT: Date,
    isAdult: boolean,
  ) {
    this.uid = uid;
    this.uuid = uuid;
    this.name = name;
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
