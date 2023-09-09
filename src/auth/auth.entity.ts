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

  @Column({ type: 'varchar'})
  password: string;

  @Column({ type: 'date', nullable: false })
  birth: Date;

  @Column({ type: 'boolean', nullable: false })
  gender: boolean;

  @Column({ length: 50, type: 'varchar', nullable: false })
  address: string;

  @Column({ length: 14, type: 'varchar', nullable: false })
  tel: string;

  @Column({ type: 'date', nullable: false })
  createdDT: Date;

  @Column({ type: 'boolean', nullable: false })
  isAdult: boolean;
}
