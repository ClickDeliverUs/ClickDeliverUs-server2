import { Body, Controller, Logger, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  private logger: Logger = new Logger(PaymentController.name);
  constructor(private readonly paymentService: PaymentService) {}

  @Post('/createOrder') // Create order api endpoint
  async createOrder(@Body() orderInfo: any) {
    try {
      const order = await this.paymentService.saveOrder(orderInfo.data); // 수정중
      return order;
    } catch (error) {
      this.logger.log(`Creating order Failed: ${error.message}`);
      throw new Error(`Failed to create order: ${error.message}`);
    }
  }

  @Post('getPaymentInfo') // payment order api endpoint
  async getPaymentInfo(@Body() orderInfo: any) {
    try {
      const paymentResult = await this.paymentService.fetchOrder(orderInfo);
      return paymentResult;
    } catch (error) {
      this.logger.log(`Failed to fetch order: ${error.message}`);
      throw new Error(`Failed to fetch order: $error.message`);
    }
  }
}
