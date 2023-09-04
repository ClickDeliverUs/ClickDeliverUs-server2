import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Snack {
  @PrimaryGeneratedColumn()
  u_id: number;

  @Column()
  menu_id: number;

  @Column()
  s_id: number;

  @Column()
  snack_name: string;

  @Column()
  snack_count: number;

  
}
