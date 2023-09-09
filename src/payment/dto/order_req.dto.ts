export class OrderReqDto {
  orderId: string;
  event: string;
  recieptId: string;
  price: number;
  taxFree: number;
  cancelledPrice: number;
  cancelledTaxFree: number;
  orderName: string;
  companyName: string;
  gatewayUrl: string;
  metadata: string;
  sandBox: boolean;
  pg: string;
  method: string;
  methodSymbol: string;
  methodOrigin: string;
  methodOriginSymbol: string;
  purchasedAt: string;
  requestedAt: string;
  statusLocale: string;
  currency: string;
  recieptUrl: string;
  status: number;
  cardData: Buffer;

  constructor(
    orderId: string,
    event: string,
    recieptId: string,
    price: number,
    taxFree: number,
    cancelledPrice: number,
    cancelledTaxFree: number,
    orderName: string,
    companyName: string,
    gatewayUrl: string,
    metadata: string,
    sandBox: boolean,
    pg: string,
    method: string,
    methodSymbol: string,
    methodOrigin: string,
    methodOriginSymbol: string,
    purchasedAt: string,
    requestedAt: string,
    statusLocale: string,
    currency: string,
    recieptUrl: string,
    status: number,
    cardData: Buffer,
  ) {
    this.orderId = orderId;
    this.event = event;
    this.recieptId = recieptId;
    this.price = price;
    this.taxFree = taxFree;
    this.cancelledPrice = cancelledPrice;
    this.cancelledTaxFree = cancelledTaxFree;
    this.orderName = orderName;
    this.companyName = companyName;
    this.gatewayUrl = gatewayUrl;
    this.metadata = metadata;
    this.sandBox = sandBox;
    this.pg = pg;
    this.method = method;
    this.methodSymbol = methodSymbol;
    this.methodOrigin = methodOrigin;
    this.methodOriginSymbol = methodOrigin;
    this.purchasedAt = purchasedAt;
    this.requestedAt = requestedAt;
    this.statusLocale = statusLocale;
    this.currency = currency;
    this.recieptUrl = recieptUrl;
    this.status = status;
    this.cardData = cardData;
  }
}
