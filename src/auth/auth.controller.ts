/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/default-user.dto';
import { SignUpReqDto } from './dto/signup-req.dto';
import { SignInResDto } from './dto/signin-res.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() signUpReqDto: SignUpReqDto): Promise<boolean> {
    return await this.authService.register(signUpReqDto);
  }

  @Post('signin')
  async signIn(@Body() signInDto: SignInDto): Promise<SignInResDto> {
    return await this.authService.signIn(signInDto);
  }

  @Post('kakao-login')
  async kakaoLogin(@Req() req): Promise<void> {
    await this.authService.kakaoLogin(req.headers["authorization"]);
  }
}
