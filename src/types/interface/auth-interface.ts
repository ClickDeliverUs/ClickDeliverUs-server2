export interface Token {
  accessToken: string;
  refreshToken: string;
}

export interface AccessPayload {
  uuid: string;
  name: string;
  id: string;
  //loginType: LoginPlatformType;
}

export interface RefreshPayload {
  uuid: string;
  id: string;
  //loginType: LoginPlatformType;
}
