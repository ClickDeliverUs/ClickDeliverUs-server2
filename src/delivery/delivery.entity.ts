import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class DeliveryEntity {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  id: string;

  @Column()
  orderId: string;

  @Column()
  deliveryPersonId: string;

  @Column({ default: 'Awaiting' })
  status: string;
}
