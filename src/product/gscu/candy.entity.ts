import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Candy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  s_id: number;

  @Column()
  menu_id: string;

  @Column()
  candy_name: string;

  @Column()
  candy_count: number;

  
}

