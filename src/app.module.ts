import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './auth/auth.entity';
import { ProductsModule } from './product/products.module';
import { Store } from './product/gscu/store.entity';
//import { Alcohol } from './product/gscu/Alcohol.entity';
import { Beverage } from './product/gscu/beverage.entity';
import { Candy } from './product/gscu/candy.entity';
import { Frozen } from './product/gscu/frozen.entity';
import { Ice } from './product/gscu/ice.entity';
import { StoreModule } from './stores/store.module';
import { Instant } from './product/gscu/instant.entity';
// import { Lifeuse } from './product/gscu/life_use.entity';
import { Medic } from './product/gscu/medic.entity';
// import { Milk } from './product/gscu/milk.entity';
import { Noodle } from './product/gscu/noodle.entity';
// import { Onedate } from './product/gscu/one_date.entity';
import { Snack } from './product/gscu/snack.entity';
// import { Tobacco } from './product/gscu/tobacco.entity';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot(TypeOrmConfig),
    TypeOrmModule.forFeature([UserEntity, 
                              Store,
                              Beverage,
                              Frozen,
                                Candy,  
                                Ice, 
                               Instant, 
                               //Lifeuse, 
                                Medic, //Milk, 
                                Noodle, 
                               // Onedate, 
                                Snack, 
                                //Tobacco
                              ]),
    ProductsModule,
    StoreModule,
  ],
  controllers: [ AppController],
  providers: [AppService],
})
export class AppModule {}

