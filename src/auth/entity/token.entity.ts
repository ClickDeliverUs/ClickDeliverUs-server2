import { BaseEntity, Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserToken extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({ type: 'binary', length: 16 })
  uuid: Buffer;

  @Column({ type: 'text' })
  refreshToken: string;
}
