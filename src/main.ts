import dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';
import * as socketio from 'socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /*
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //엔티티 데코레이터에 없는 프로퍼티값은 무조건 거름
      forbidNonWhitelisted: true, //엔티티 데m: 컨트롤러가 값을 받을때 컨트롤러에 정의한 타입으로
    }),
  );
  */
  //http 어댑터에 웹소켓 어댑터 등록
  app.useWebSocketAdapter(new IoAdapter(app));

  await app.listen(3200);
}
bootstrap();
