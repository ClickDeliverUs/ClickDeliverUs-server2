export class DeliveryDto {
  orderId: string;
  deliveryPersonId: string;

  constructor(orderId: string, deliveryPersonId: string) {
    this.orderId = orderId;
    this.deliveryPersonId = deliveryPersonId;
  }
}
