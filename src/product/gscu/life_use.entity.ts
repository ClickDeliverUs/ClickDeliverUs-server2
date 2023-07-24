import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Lifeuse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  s_id: string;

  @Column()
  menu_id: string;

  @Column()
  lifeuse_name: string;

  @Column()
  lifeuse_count: number;

  
}
