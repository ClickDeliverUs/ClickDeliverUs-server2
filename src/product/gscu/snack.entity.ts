import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Snack {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  s_id: string;

  @Column()
  menu_id: string;

  @Column()
  snack_name: string;

  @Column()
  snack_count: number;

  
}
