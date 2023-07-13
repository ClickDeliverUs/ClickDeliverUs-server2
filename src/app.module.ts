import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmConfig } from './config/typeorm.config';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './product/products.controller';
import { ProductsService } from './product/products.service';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(TypeOrmConfig)],
  controllers: [AppController,ProductsController],
  providers: [AppService,ProductsService],
})
export class AppModule {
  constructor(private datasource: DataSource) {}
}

