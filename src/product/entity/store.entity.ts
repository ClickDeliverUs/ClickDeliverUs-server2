/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  sid: number;

  @Column()
  cvsName: string;

  @Column()
  cAddress: string;

  @Column()
  phone : string;

  @Column({type:'json'})
  cOpen: StoreTime;

  @Column({type:'json'})
  cClose: StoreTime;
  
}
