import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Ice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  s_id: number;

  @Column()
  menu_id: string;

  @Column()
  ice_name: string;

  @Column()
  ice_count: number;

  
}
