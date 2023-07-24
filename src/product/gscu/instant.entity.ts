import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Instant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  s_id: string;

  @Column()
  menu_id: string;

  @Column()
  instant_name: string;

  @Column()
  instant_count: number;

  
}
