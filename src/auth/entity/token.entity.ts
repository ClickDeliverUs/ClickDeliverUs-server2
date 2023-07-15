import { BaseEntity, Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity()
export class UserToken extends BaseEntity {
  @Index({ unique: true })
  @PrimaryColumn({ type: 'binary', length: 16 })
  uuid: Buffer;

  @Column({ type: 'text' })
  refreshToken: string;
}
