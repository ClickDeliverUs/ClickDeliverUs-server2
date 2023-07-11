export class DefaultUserDto {
  id: string;
  password: string;
  constructor(email: string, password: string) {
    Object.assign(email, password);
  }
}
export class SignInDto extends DefaultUserDto {
  tel: string;
  address: string;
  constructor(id: string, password: string, tel: string, address: string) {
    super(id, password);
    Object.assign(id, password, tel, address);
  }
}
