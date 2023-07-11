// import { Injectable, UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { Payload } from '../jwt.payload';

// @Injectable()
// export class AccessStrategy extends PassportStrategy(Strategy) {
//   constructor() {
//     super({
//       // Header Authentification 에서 Bearer 토큰으로부터 jwt를 추출하겠다는 의미
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: 'secret', // jwt생성시 비밀키로 사용할 텍스트(노출 X)
//       ignoreExpiration: 'false', // jwt 만료를 무시할 것인지(기본값 : False)
//     });
//   }

//   async validate(payload: Payload) {
//     let validatedUser;

//  const { uuid, name, id } = payload;

//     try {
//       // 뭔가 필요함
//     } catch (err) {
//       console.log(`DB error occurred(Finding user in access payload): ${id}`);
//       throw new InternalServerErrorException('DB error occurred');
//     }

//     if (!validatedUser) {
//       console.log(`Invalid access token payload: ${payload.id}`);
//       throw new UnauthorizedException('Invalid access token payload');
//     }

//     console.log(`Valid access token payload: ${payload.id}`);
//     return validatedUser;
//   }
//  }
// }