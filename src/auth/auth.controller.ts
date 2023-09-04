import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/default-user.dto';
import { SignUpReqDto } from './dto/signup-req.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup') // 회원가입 컨트롤러
  async signUp(@Body() signUpReqDto: SignUpReqDto): Promise<boolean> {
    // SignUpDto를 불러오는 signUp함수
    return await this.authService.register(signUpReqDto); // auth.service.ts의 register 함수를 불러옴
  
  }
  @Post('signin') // 로그인 컨트롤러
  async signIn(@Body() signInDto: SignInDto): Promise<boolean> {
    //SignInDto를 불러오는 signIn함수
     return await this.authService.signIn(signInDto); // auth.service의 signIn함수를 불러옴
  }
}
