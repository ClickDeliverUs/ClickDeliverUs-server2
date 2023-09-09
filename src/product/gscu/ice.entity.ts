/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ice {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  menuId: number;

  @Column()
  sId: number;

  @Column()
  iceName: string;

  @Column()
  iceCount: number;
}
 
