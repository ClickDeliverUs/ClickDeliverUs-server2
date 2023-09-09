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
  phone : string;

  @Column({type:'time'})
  c_open: string;

  @Column({type:'time'})
  c_close: string;
}
 
