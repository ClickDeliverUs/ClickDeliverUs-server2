import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Noodle {
  @PrimaryGeneratedColumn()
  u_id: number;

  @Column()
  menu_id: number;

  @Column()
  s_id: number;

  @Column()
  noodle_name: string;

  @Column()
  noodle_count: number;

  
}
