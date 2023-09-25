import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('/createOrder') // Create order api endpoint
  async createOrder(@Body() orderInfo: any) {
    try {
      const order = await this.paymentService.saveOrder(orderInfo.data); // 수정중
      return order;
    } catch (error) {
      throw new Error(`Failed to create order: ${error.message}`);
    }
  }

  @Post('makePayment') // payment order api endpoint
  async makePayment(@Body() orderInfo: any) {
    try {
      //const paymentResult = await this.paymentService.makePayment(orderInfo);
      // Handle the paymentResult, e.g., send it to the front end
      //return paymentResult;
      return 0;
    } catch (error) {
      throw new Error(`Failed to make payment: $error.message`);
    }
  }
}
