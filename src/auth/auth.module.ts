import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MemberCRUD } from './repository/auth.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MemberCRUD])],
  controllers: [AuthController],
  providers: [AuthService, MemberCRUD],
})
export class AuthModule {}
