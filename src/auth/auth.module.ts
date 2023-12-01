import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './repository/auth.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtUtil } from './jwt/jwt.util';
import { JwtModule } from '@nestjs/jwt';
import { TokenRepository } from './repository/token.repository';
import { UserEntity } from './auth.entity';
import { Repository } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([AuthRepository, UserEntity, TokenRepository]),
    JwtModule.register({}),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, JwtUtil, TokenRepository, Repository],
  exports: [AuthService, AuthRepository],
})
export class AuthModule {}
