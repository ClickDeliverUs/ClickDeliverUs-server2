import { BaseEntity, Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  uid: number;

  @Index()
  @Column({ type: 'binary', length: 16 })
  uuid: Buffer;

  @Column({ type: 'varchar', length: 10 })
  name: string;

  @Column({ type: 'varchar', length: 10 })
  nickName: string;

  @Column({ type: 'varchar', length: 14, unique: true })
  id: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'date', nullable: false })
  birth: Date;

  @Column({ type: 'tinyint', nullable: false })
  gender: number;

  @Column({ type: 'int', default: 0 })
  age: number;

  @Column({ length: 50, type: 'varchar', nullable: false })
  address: string;

  @Column({ type: 'tinyint', nullable: false })
  isAdult: number;

  @Column({ length: 14, type: 'varchar', nullable: false })
  tel: string;

  @Column({ type: 'date', nullable: false })
  createdDT: Date;
}
