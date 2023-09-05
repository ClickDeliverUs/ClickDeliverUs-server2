export class SignInReqDto {
  id: string;
  password: string;

  constructor(id: string, password: string) {
    this.id = id;
    this.password = password;
  }
}
