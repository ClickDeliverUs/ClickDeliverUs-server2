/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  menuId: number;

  @Column()
  sId: number;

  @Column()
  goodsName: string;

  @Column()
  goodsCount: number;

  @Column()
  category: string;
  
}
 
