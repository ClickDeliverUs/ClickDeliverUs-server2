/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Alcohol {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  menuId: number;

  @Column()
  sId: number;

  @Column()
  alcoholName: string;

  @Column()
  alcoholCount: number;
}

