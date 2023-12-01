import { Column, Entity, PrimaryGeneratedColumn , JoinColumn, OneToMany, ManyToOne} from 'typeorm';
import { DeliveryEntity } from 'src/delivery/delivery.entity';
import { Store } from 'src/product/entity/store.entity';

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
  s_id: number;

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

  @Column()
  csv_name: string;
  setSId(value: number): void {
    this.s_id = value;

    switch (value) {
      case 1:
        this.csv_name = 'CU';
        break;
      case 2:
        this.csv_name = 'GS25';
        break;
      case 3:
        this.csv_name = '세븐일레븐';
        break;
    }
  }
}
