import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  orderId: string;

  @Column()
  orderInfo: string; // 주문 정보를 담을 필드(타입 변환가능)

  @Column()
  paymentInfo: string; // 결제 정보를 담을 필드
}
