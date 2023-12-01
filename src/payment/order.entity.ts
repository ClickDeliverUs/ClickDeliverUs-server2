import { Column, Entity, PrimaryGeneratedColumn , JoinColumn, OneToMany,OneToOne} from 'typeorm';
import { DeliveryEntity } from 'src/delivery/delivery.entity';

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  id: string;

  @Column()
  address: string;

  @Column()
  requests: string;

  @Column('json')
  parcels: Buffer;

  @Column()
  order_id: string;

  @Column()
  receipt_id: string;

  @Column()
  s_id: Buffer;

  @Column()
  price: number;

  @Column()
  cancelled_price: number;

  @Column()
  order_name: string;

  @Column()
  company_name: string;

  @Column('json')
  metadata: Buffer;

  @Column()
  pg: string;

  @Column()
  method_symbol: string;

  @Column()
  method_origin_symbol: string;

  @Column()
  purchased_at: string;

  @Column()
  requested_at: string;

  @Column()
  status_locale: string;

  @Column()
  reciept_url: string;

  @Column()
  status: number;

  @Column('json')
  card_data: Buffer;

  @OneToMany(() => DeliveryEntity, delivery => delivery.order)
  delivery: DeliveryEntity[];
}
