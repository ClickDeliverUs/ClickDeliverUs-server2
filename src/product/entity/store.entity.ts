/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrderEntity } from 'src/payment/order.entity';

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
