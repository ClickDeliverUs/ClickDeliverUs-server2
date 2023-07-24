import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  s_id: string;

  @Column()
  cvsname: string;

  @Column()
  c_address: string;

  @Column()
  mincost: number;

  @Column()
  uuid: string;

  
}
