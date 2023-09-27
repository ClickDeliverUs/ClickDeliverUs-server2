export class OrderInfoDto {
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
    order_id: string,
    reciept_id: string,
    uuid_order: Buffer,
    uuid_rider: Buffer,
    s_id: Buffer,
    price: number,
    cancelled_price: number,
    order_name: string,
    company_name: string,
    metadata: Buffer,
    pg: string,
    method_symbol: string,
    method_origin_symbol: string,
    purchased_at: string,
    requested_at: string,
    status_locale: string,
    reciept_url: string,
    status: number,
    card_data: Buffer,
  ) {
    this.order_id = order_id;
    this.receipt_id = reciept_id;
    this.uuid_order = uuid_order;
    this.uuid_rider = uuid_rider;
    this.s_id = s_id;
    this.price = price;
    this.cancelled_price = cancelled_price;
    this.order_name = order_name;
    this.company_name = company_name;
    this.metadata = metadata;
    this.pg = pg;
    this.method_symbol = method_symbol;
    this.method_origin_symbol = method_origin_symbol;
    this.purchased_at = purchased_at;
    this.requested_at = requested_at;
    this.status_locale = status_locale;
    this.receipt_url = reciept_url;
    this.status = status;
    this.card_data = card_data;
  }
}
