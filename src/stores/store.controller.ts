/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('stores')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get('cvstore')
  async searchStores() {
    return this.storeService.findAll(); // 'Store' 테이블의 모든 정보를 조회하는 메서드 호출
  }
}
