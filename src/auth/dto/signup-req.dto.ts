//name, nickName, id, password, birth, address, tel, gender, isAdult
export class SignUpReqDto {
  name: string;
  nickName: string;
  id: string;
  password: string;
  age: number;
<<<<<<< HEAD
  birth: Date;
=======
  birth: string;
>>>>>>> 2da78e2b (회원가입 구현)
  address: string;
  tel: string;
  gender: boolean;
  isAdult: boolean;
<<<<<<< HEAD
  uuid: string;
=======
  uuid?: string;
>>>>>>> 2da78e2b (회원가입 구현)

  constructor(
    name: string,
    nickName: string,
    id: string,
    password: string,
    age: number,
<<<<<<< HEAD
    birth: Date,
=======
    birth: string,
>>>>>>> 2da78e2b (회원가입 구현)
    address: string,
    tel: string,
    gender: boolean,
    isAdult: boolean,
<<<<<<< HEAD
    uuid: string,
=======
    uuid?: string,
>>>>>>> 2da78e2b (회원가입 구현)
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
