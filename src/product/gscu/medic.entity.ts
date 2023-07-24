import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Medic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  s_id: string;

  @Column()
  menu_id: string;

  @Column()
  medic_name: string;

  @Column()
  medic_count: number;

  
}
