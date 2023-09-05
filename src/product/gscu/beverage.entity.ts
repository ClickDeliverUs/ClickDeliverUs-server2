/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Beverage {
  @PrimaryGeneratedColumn()
  u_id: number;

  @Column()
  menu_id: number;

  @Column()
  s_id: number;

  @Column()
  beverage_name: string;

  @Column()
  beverage_count: number;
}
