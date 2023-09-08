/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Goods {
  @PrimaryGeneratedColumn()
  u_id: number;

  @Column()
  menu_id: number;

  @Column()
  s_id: number;

  @Column()
  goods_name: string;

  @Column()
  goods_count: number;
}
 
