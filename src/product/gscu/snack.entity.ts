/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Snack {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  menuId: number;

  @Column()
  sId: number;

  @Column()
  product: string;

  @Column()
  count: number;
}
 
