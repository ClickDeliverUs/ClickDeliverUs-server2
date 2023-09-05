/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  s_id: number;

  @Column()
  cvsname: string;

  @Column()
  c_address: string;

  @Column()
  c_open: Date;

  @Column()
  c_close: Date;
}
 
