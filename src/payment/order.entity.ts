import { Binary, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn()
  orderId: string;

  @Column()
  recieptId: string;

  @Column()
  price: number;

  @Column()
  taxFree: number;

  @Column()
  cancelledPrice: number;

  @Column()
  cancelledTaxFree: number;

  @Column()
  orderName: string;

  @Column()
  companyName: string;

  @Column()
  gatewayUrl: string;

  @Column()
  metadata: string;

  @Column()
  sandBox: boolean;

  @Column()
  pg: string;

  @Column()
  method: string;

  @Column()
  methodSymbol: string;

  @Column()
  methodOrigin: string;

  @Column()
  methodOriginSymbol: string;

  @Column()
  purchasedAt: string;

  @Column()
  requestedAt: string;

  @Column()
  statusLocale: string;

  @Column()
  Currency: string;

  @Column()
  recieptUrl: string;

  @Column()
  status: number;

  @Column()
  cardData: Buffer;

  @Column()
  paymentInfo: string; // 결제 정보를 담을 필드
}