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

  @Column({ default: 0 })
  status: number;
  // 0: pending
  // 1: Assigned
  // 2: pickedUp
  // 3: Completed
}
