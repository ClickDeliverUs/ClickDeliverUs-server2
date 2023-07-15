export class RegenerateTokenDto {
  uuid: string;
  id: string;
  accessToken: string;
  refreshToken: string;

  constructor(uuid: string, id: string, accessToken: string, refreshToken: string) {
    this.uuid = uuid;
    this.id = id;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }
}
