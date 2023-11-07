export class DeliveryDto {
  orderId: string;
  deliveryPersonId: string;
  status: number;

  constructor(orderId: string, deliveryPersonId: string, status: number) {
    this.orderId = orderId;
    this.deliveryPersonId = deliveryPersonId;
    this.status = status;
  }
}
