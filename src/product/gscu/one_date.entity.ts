import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Onedate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  s_id: string;

  @Column()
  menu_id: string;

  @Column()
  onedate_name: string;

  @Column()
  onedate_count: number;

  
}
