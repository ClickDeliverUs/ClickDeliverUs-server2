import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { AuthRepository } from './repository/auth.repository';
import { SignInResDto } from './dto/signin-res.dto';
import { SignInReqDto } from './dto/signin-req.dto';
import * as bcrypt from 'bcryptjs';
import { SignUpReqDto } from './dto/signup-req.dto';
import { generateNewUuidV1 } from '../util/uuid.util';
import { AccessPayload, RefreshPayload } from 'src/util/interface/auth-interface';
import { JwtUtil } from './jwt/jwt.util';
import { TokenRepository } from './repository/token.repository';
import { UserToken } from './entity/token.entity';
import { RegenerateTokenDto } from './dto/regenerate-token.dto';
import axios from 'axios';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from './auth.entity';
import { uuidToBin, binToUuid } from '../util/uuid.util';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  private logger: Logger = new Logger(AuthService.name);

  constructor(
    private authRepository: AuthRepository,
    private tokenRepository: TokenRepository,
    private jwtUtil: JwtUtil,
    private jwtService: JwtService,
    private readonly userRepository: Repository<UserEntity>,
    ) {}

  async isDuplicateEmail(id: string): Promise<boolean> {
    const user: SignInResDto = await this.authRepository.findUser(id);

    if (user) {
      return true;
    } else {
      return false;
    }
  }
  async register(signUpReqDto: SignUpReqDto): Promise<boolean> {
    const { id, password } = signUpReqDto;
    //회원가입 로직 처리
    const uuid: string = generateNewUuidV1();

    const salt: string = await bcrypt.genSalt();
    const hashedPassword: string = await bcrypt.hash(password, salt);

    signUpReqDto.uuid = uuid;
    signUpReqDto.password = hashedPassword;

    const didUserSave: boolean = await this.authRepository.saveUser(signUpReqDto);

    if (!didUserSave) {
      this.logger.log(`Duplicate user email: ${id}`);
      throw new ConflictException('Duplicate email address');
    }

    try {
      // MemberCRUD를 사용해 회원가입 로직 수행
      return await this.authRepository.saveUser(signUpReqDto);
    } catch (error) {
      // 회원가입 실패 시 예외 처리 수행

      throw new Error('회원가입에 실패했습니다.');
    }
  }

  async checkIfIdExists(id: string): Promise<boolean> {
    const existingUser = await this.authRepository.findOne({ where: { id } });
    return !!existingUser;
  }

  async kakaoLogin(accessToken: string) {
    const url = 'https://kapi.kakao.com/v2/user/me';
    const headers = {
      Authorization: accessToken,
    };

    try {
      const kakaoResp = await axios.get(url, { headers });
      const kakaoUserEmail: string = kakaoResp.data.kakao_account.email;
      const kakaoUserNickname: string = kakaoResp.data.properties.nickname;

      // TypeORM을 사용하여 데이터베이스에서 사용자를 확인합니다.
      let user: UserEntity = await this.authRepository.findOne({ where: { id: kakaoUserEmail } });
      if (!user) {
        // 데이터베이스에 카카오 유저 정보가 없는 경우
        // 엔티티를 생성 후 user에 할당
        user = new UserEntity();
        user.uuid = uuidToBin(generateNewUuidV1());
        user.id = kakaoUserEmail;
        user.nickName = kakaoUserNickname;

        user = await this.authRepository.save(user);
      } else {
      }

      // 토큰 발급 및 정보 반환
      const accessPayload: AccessPayload = {
        uuid: binToUuid(user.uuid),
        id: user.id,
        name: user.nickName,
      };
      const acc = this.jwtUtil.generateAccessToken(accessPayload);

      const refreshPayload: RefreshPayload = {
        uuid: binToUuid(user.uuid),
        id: user.id,
      };

      const ref = this.jwtUtil.generateRefershToken(refreshPayload);

      const newRefreshToken = this.jwtUtil.generateRefershToken(refreshPayload);

      // 데이터베이스에 리프레시 토큰 저장 추가
      const userToken = new UserToken();
      userToken.uuid = user.uuid;
      userToken.refreshToken = newRefreshToken;

      await this.tokenRepository.delete({ uuid: user.uuid });
      await this.tokenRepository.save(userToken);
      const signInResDto: SignInResDto = {
        uuid: binToUuid(user.uuid),
        id: user.id,
        nickname: user.nickName,
        createdDT: user.createdDT,
        accessToken: acc,
        refreshToken: ref,
      };
      console.log(signInResDto);
      return signInResDto;
    } catch (error) {
      console.log('Kakao API Error:', error);
      throw new Error('카카오 로그인 실패');
    }
  }

  async signIn(signInReqDto: SignInReqDto): Promise<SignInResDto> {
    const { id, password } = signInReqDto;

    //const currentUserDto: SignInReqDto = new SignInReqDto(id, password);

    const registeredUser: SignInResDto = await this.authRepository.findUser(id);

    if (!registeredUser) {
      this.logger.log(`User not found: ${id}`);
      throw new NotFoundException('User not found');
    }

    if (registeredUser) {
      const decodedPassword: boolean = await bcrypt.compare(password, registeredUser.password);
      console.log(decodedPassword);

      if (decodedPassword) {
        const accessPayload: AccessPayload = {
          uuid: registeredUser.uuid,
          name: registeredUser.name,
          id: registeredUser.id,
        };

        const refreshPayload: RefreshPayload = {
          uuid: registeredUser.uuid,
          id: registeredUser.id,
        };

        const accessToken: string = this.jwtUtil.generateAccessToken(accessPayload);
        const refreshToken: string = this.jwtUtil.generateRefershToken(refreshPayload);

        await this.tokenRepository.saveRefreshToken(
          registeredUser.uuid,
          registeredUser.id,
          refreshToken,
        );

        registeredUser.accessToken = accessToken;
        registeredUser.refreshToken = refreshToken;
        delete registeredUser.password;
        this.logger.log(`User verified: ${id}`);
        return registeredUser;
      } else if (!decodedPassword) {
        console.log(decodedPassword);
        this.logger.log(`Wrong password: ${id}`);
        throw new BadRequestException('Password does not match');
      }
    } else {
      this.logger.log(`User Not Found: ${id}`);
      throw new NotFoundException('User not found');
    }
  }

  async regenerateToken(regenerateTokenDto: RegenerateTokenDto): Promise<RegenerateTokenDto> {
    const { uuid, id, accessToken, refreshToken } = regenerateTokenDto;

    const decodedAccessToken: AccessPayload = this.jwtUtil.decodeToken(accessToken);

    if (uuid === decodedAccessToken.uuid) {
      const storedRefreshToken: UserToken = await this.tokenRepository.findRefreshToken(
        uuid,
        refreshToken,
      );

      if (!storedRefreshToken) {
        this.logger.log(`Invalid refresh token: ${id}`);
        throw new BadRequestException('Invalid refresh Token');
      }

      const accessPayload: AccessPayload = {
        uuid: decodedAccessToken.uuid,
        name: decodedAccessToken.name,
        id,
      };

      const refreshPayload: RefreshPayload = { uuid: decodedAccessToken.uuid, id };

      const newAccessToken: string = this.jwtUtil.generateAccessToken(accessPayload);
      const newRefreshToken: string = this.jwtUtil.generateRefershToken(refreshPayload);

      const newGeneratedToken: RegenerateTokenDto = new RegenerateTokenDto(
        uuid,
        id,
        newAccessToken,
        newRefreshToken,
      );

      this.logger.log(`Tokens successfully regenerated: ${id}`);

      return newGeneratedToken;
    } else {
      this.logger.log(`Invalid access Token payload: ${id}`);
    }
  }

  async getDeliveryPersonIdByUuid(uuid: string): Promise<string> {
    // 사용자 UUID를 기반으로 배송 담당자의 ID를 가져오는 로직
    const user = await this.userRepository.findOne({
      where: { uuid: Buffer.from(uuid, 'utf-8') },
      relations: ['deliveries'],
    });

    if (!user) {
      // 사용자를 찾지 못한 경우 에러 처리 또는 기본값 반환 등
      throw new Error('User not found');
    }

    // 최신 배송 정보를 가져오거나, 특정 조건에 맞게 처리
    const latestDelivery = user.deliveries[user.deliveries.length - 1];

    return latestDelivery ? latestDelivery.deliveryPersonId : null;
  }
}
