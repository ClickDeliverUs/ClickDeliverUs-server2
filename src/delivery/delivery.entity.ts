import { Column, PrimaryGeneratedColumn, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { UserEntity } from 'src/auth/auth.entity';
import { OrderEntity } from 'src/payment/order.entity';

@Entity()
export class DeliveryEntity {
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
  orderId: string;

  @Column({ default: 0 })
  deliveryPersonId: string;

  @ManyToOne(() => UserEntity, (user) => user.deliveries)
  user: UserEntity;

  @ManyToOne(() => OrderEntity, order => order.delivery)  // 추가된 부분
  order: OrderEntity;
  

  @Column({ default: 0 })
  status: number;
  // 0: pending
  // 1: Assigned
  // 2: pickedUp
  // 3: Completed
}
