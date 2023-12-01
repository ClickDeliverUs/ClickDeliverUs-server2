import { Module } from '@nestjs/common';
import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';
import { DeliveryEntity } from './delivery.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentModule } from 'src/payment/payment.module';
import { UserEntity } from 'src/auth/auth.entity';
import { AuthRepository } from 'src/auth/repository/auth.repository';
import { TokenRepository } from 'src/auth/repository/token.repository';
import { JwtUtil } from 'src/auth/jwt/jwt.util';
import { Repository } from 'typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { EventEmitterProvider } from 'src/payment/event-emitter.provider';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DeliveryEntity,
      UserEntity,
      AuthRepository,
      TokenRepository,
      JwtUtil,
      Repository,
    ]),
    PaymentModule,
    AuthModule,
  ],
  controllers: [DeliveryController],
  providers: [DeliveryService, AuthService, UserEntity, JwtUtil, JwtService, Repository],
  exports: [DeliveryService],
})
export class DeliveryModule {}
