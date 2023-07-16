import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MemberCRUD } from './repository/auth.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtUtil } from './jwt/jwt.util';
import { JwtModule } from '@nestjs/jwt';
import { TokenRepository } from './repository/token.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MemberCRUD]), JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, MemberCRUD, JwtUtil, TokenRepository],
})
export class AuthModule {}
