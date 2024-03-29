import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Payload } from './jwt.payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // Header Authentification 에서 Bearer 토큰으로부터 jwt를 추출하겠다는 의미
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret', // jwt생성시 비밀키로 사용할 텍스트(노출 X)
      ignoreExpiration: 'false', // jwt 만료를 무시할 것인지(기본값 : False)
    });
  }
  async validate(payload: Payload) {
    const user = payload.sub === '0';

    if (user) {
      return user; // request.user에 해당 내용을 넣어준다.(Passport 라이브러리가 해줌)
    } else {
      throw new UnauthorizedException('접근 오류');
    }
  }
}
