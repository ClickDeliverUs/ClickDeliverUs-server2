import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { MemberCRUD } from './repository/auth.repository';
import { SignInResDto } from './dto/signin-res.dto';
import { SignInReqDto } from './dto/signin-req.dto';
import * as bcrypt from 'bcryptjs';
import { SignUpReqDto } from './dto/signup-req.dto';
import { generateNewUuidV1 } from '../util/uuid.util';
import { AccessPayload, RefreshPayload } from 'src/types/interface/auth-interface';
import { JwtUtil } from './jwt/jwt.util';
import { TokenRepository } from './repository/token.repository';
import { UserToken } from './entity/token.entity';
import { RegenerateTokenDto } from './dto/regenerate-token.dto';

@Injectable()
export class AuthService {
  private logger: Logger = new Logger(AuthService.name);

  constructor(
    private memberCRUD: MemberCRUD,
    private tokenRepository: TokenRepository,
    private jwtUtil: JwtUtil,
  ) {}

  async isDuplicateEmail(id: string): Promise<boolean> {
    const user: SignInResDto = await this.memberCRUD.findUser(id);

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

    const didUserSave: boolean = await this.memberCRUD.saveUser(signUpReqDto);

    if (!didUserSave) {
      this.logger.log(`Duplicate user email: ${id}`);
      throw new ConflictException('Duplicate email address');
    }

    try {
      // MemberCRUD를 사용해 회원가입 로직 수행
      return await this.memberCRUD.saveUser(signUpReqDto);
    } catch (error) {
      // 회원가입 실패 시 예외 처리 수행

      throw new Error('회원가입에 실패했습니다.');
    }
    return didUserSave;
  }

  async signIn(signInReqDto: SignInReqDto): Promise<SignInResDto> {
    const { id, password } = signInReqDto;

    //const currentUserDto: SignInReqDto = new SignInReqDto(id, password);

    const registeredUser: SignInResDto = await this.memberCRUD.findUser(id);

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

        // 여기도 주입이 안돼있다
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

  async signIn(signInDto: SignInDto): Promise<SignInDto> {
    const { email, password, tel, address } = signInDto;
    console.log(email);
    console.log(password);
    console.log(tel);
    console.log(address);
    const currentUserDto: SignInDto = new SignInDto(email, password, tel, address);
    return currentUserDto;
  }
}
