import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { SignUpDto } from './dto/signup.dto';
import { SignInDto } from './dto/default-user.dto';
import { MemberCRUD } from './repository/auth.repository';
import { SignInResDto } from './dto/signin-res.dto';
import { SignUpResDto } from './dto/signup-res.dto';
import { SignInReqDto } from './dto/signin-req.dto';
import * as bcrypt from 'bcryptjs';
import { SignUpReqDto } from './dto/signup-req.dto';
import { generateNewUuidV1 } from '../util/uuid.util';
//import { AccessPayload, RefreshPayload } from './types/interface/auth-interface';

@Injectable()
export class AuthService {
  constructor(
    private memberCRUD: MemberCRUD,
    //private tokenRepository: TokenRepository,
    //private jwtUtil: JwtUtil
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
    //회원가입 로직 처리
    const uuid: string = generateNewUuidV1();
    signUpReqDto.uuid = uuid;

    try {
      // MemberCRUD를 사용해 회원가입 로직 수행
      return await this.memberCRUD.saveUser(signUpReqDto);
    } catch (error) {
      // 회원가입 실패 시 예외 처리 수행
    
      throw new Error('회원가입에 실패했습니다.');
    }
    //return값 넣기
  }

  async signIn(signInReqDto: SignInReqDto): Promise<boolean> {
    const { id, password } = signInReqDto;

    //const currentUserDto: SignInReqDto = new SignInReqDto(id, password);
   
    const registeredUser : SignInResDto = await this.memberCRUD.findUser(id);
    
    //if (!registeredUser) {     
     // console.log(`User Not Found: ${id}`);
     // throw new NotFoundException('User not found');
    //}

    
    if (registeredUser) {
      const decodedPassword: boolean = await bcrypt.compare(password, registeredUser.password);
      if (decodedPassword) {
        console.log('success');
        return true;
      } else {
        console.log('비번틀림');
        throw new BadRequestException('Password does not match');
      }
    } else {
      console.log(`User Not Found: ${id}`);
      throw new NotFoundException('User not found');
    }


    

   /* if (decodedPassword) { 
      // 값 리턴 없으면 배드 리퀘스트  
      const accessPayload: AccessPayload ={
        uuid: registeredUser.uuid,
        name: registeredUser.name,
        id: registeredUser.id
      };

      const refreshPayload: RefreshPayload = {
        uuid: registeredUser.uuid,
        id: registeredUser.id,
      };
    

      const accessToken: string = this.jwtUtil.generateAccessToken(accessPayload);
      const refreshToken: string = this.jwtUtil.generateRefreshToken(refreshPayload);

      await this.tokenRepository.saveRefreshToken(registeredUser.uuid, registeredUser.id, refreshToken);

      registeredUser.accessToken = accessToken;
      registeredUser.refreshToken = refreshToken;
      delete registeredUser.password;
      console.log(`User verified: ${email}`);
      return registeredUser;
    } else {
      console.log(`Wrong password: ${email}`);
      throw new BadRequestException('Password does not match');
    }
    */
  }
}

