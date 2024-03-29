import dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';
import * as socketio from 'socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //http 어댑터에 웹소켓 어댑터 등록
  app.useWebSocketAdapter(new IoAdapter(app));

  await app.listen(3200);
}
bootstrap();
