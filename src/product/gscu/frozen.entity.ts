/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Frozen {
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
 
