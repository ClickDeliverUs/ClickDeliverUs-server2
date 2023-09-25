export class OrderReqDto {
  order_id: string;
  receipt_id: string;
  uuid_order: Buffer;
  uuid_rider: Buffer;
  s_id: Buffer;
  price: number;
  cancelled_price: number;
  order_name: string;
  company_name: string;
  metadata: Buffer;
  pg: string;
  method_symbol: string;
  method_origin_symbol: string;
  purchased_at: string;
  requested_at: string;
  status_locale: string;
  receipt_url: string;
  status: number;
  card_data: Buffer;

  constructor(
    orderId: string,
    recieptId: string,
    uuidOrder: Buffer,
    uuidRider: Buffer,
    sId: Buffer,
    price: number,
    cancelledPrice: number,
    orderName: string,
    companyName: string,
    metadata: Buffer,
    pg: string,
    methodSymbol: string,
    methodOriginSymbol: string,
    purchasedAt: string,
    requestedAt: string,
    statusLocale: string,
    recieptUrl: string,
    status: number,
    cardData: Buffer,
  ) {
    this.order_id = orderId;
    this.receipt_id = recieptId;
    this.uuid_order = uuidOrder;
    this.uuid_rider = uuidRider;
    this.s_id = sId;
    this.price = price;
    this.cancelled_price = cancelledPrice;
    this.order_name = orderName;
    this.company_name = companyName;
    this.metadata = metadata;
    this.pg = pg;
    this.method_symbol = methodSymbol;
    this.method_origin_symbol = methodOriginSymbol;
    this.purchased_at = purchasedAt;
    this.requested_at = requestedAt;
    this.status_locale = statusLocale;
    this.receipt_url = recieptUrl;
    this.status = status;
    this.card_data = cardData;
  }
}
