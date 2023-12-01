import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './repository/auth.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtUtil } from './jwt/jwt.util';
import { JwtModule } from '@nestjs/jwt';
import { TokenRepository } from './repository/token.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AuthRepository]), JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, JwtUtil, TokenRepository],
  exports: [JwtUtil],
})
export class AuthModule {}
