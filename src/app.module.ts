import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmConfig } from './config/typeorm.config';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './product/products.controller';
import { ProductsService } from './product/products.service';
import { ChatGateway } from './chat/chat.gateway';
import { ChatService } from './chat/chat.service';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(TypeOrmConfig)],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService, ChatGateway, ChatService],
})
export class AppModule {
  constructor(private datasource: DataSource) {}
}
