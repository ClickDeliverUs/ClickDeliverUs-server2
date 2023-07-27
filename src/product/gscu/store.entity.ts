import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Store {
  @Column()
  s_id: number;

  @Column()
  cvsname: string;

  @Column()
  c_address: string;

  @Column()
  mincost: number;

  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  }

