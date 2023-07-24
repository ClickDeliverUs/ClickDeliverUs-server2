import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Beverage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  s_id: number;

  @Column()
  menu_id: string;

  @Column()
  beverage_name: string;

  @Column()
  beverage_count: number;

  
}
