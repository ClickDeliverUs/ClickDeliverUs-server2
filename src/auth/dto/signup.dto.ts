export class SignUpDto {
  email: string;
  userName: string;
  password: string;
  isAdult: boolean;
  tel: string;
  birth: string;
  address: string;
  constructor(
    email: string,
    userName: string,
    password: string,
    isAdult: boolean,
    tel: string,
    birth: string,
    address: string,
  ) {
    this.email = email;
    this.userName = userName;
    this.password = password;
    this.isAdult = isAdult;
    this.tel = tel;
    this.birth = birth;
    this.address = address;
  }
}
