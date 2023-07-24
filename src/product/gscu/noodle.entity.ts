import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Noodle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  s_id: string;

  @Column()
  menu_id: string;

  @Column()
  noodle_name: string;

  @Column()
  noodle_count: number;

  
}
