/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Alcohol {
  @PrimaryGeneratedColumn()
  u_id: number;

  @Column()
  menu_id: number;

  @Column()
  s_id: number;

  @Column()
  alcohol_name: string;

  @Column()
  alcohol_count: number;
}
