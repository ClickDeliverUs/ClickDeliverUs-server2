/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ice {
  @PrimaryGeneratedColumn()
  u_id: number;

  @Column()
  menu_id: number;

  @Column()
  s_id: number;

  @Column()
  ice_name: string;

  @Column()
  ice_count: number;
}
 
