import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Frozen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  s_id: number;

  @Column()
  menu_id: string;

  @Column()
  frozen_name: string;

  @Column()
  frozen_count: number;

  
}

