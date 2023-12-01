export class DeliveryDto {
  id?: string;
  address?: string;
  requests?: string;
  parcels?: any;
  orderId?: string;
  deliveryPersonId?: string;
  status?: number;

  constructor(data: Partial<DeliveryDto>) {
    Object.assign(this, data);
  }
}
