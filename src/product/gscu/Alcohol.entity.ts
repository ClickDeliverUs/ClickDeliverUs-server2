import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Alcohol {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  s_id: number;

  @Column()
  menu_id: string;

  @Column()
  Alcohol_name: string;

  @Column()
  Alcohol_count: number;

}
