import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('createOrder') // Create order api endpoint
  async createOrder(@Body() orderInfo: any) {
    try {
      //Create an order and get the order details
      const order = await this.paymentService.createOrder(orderInfo); // 수정중
      // Handle the order and get the order details
      return order;
    } catch (error) {
      throw new Error(`Failed to create order: ${error.message}`);
    }
  }

  @Post('makePayment') // payment order api endpoint
  async makePayment(@Body() orderInfo: any) {
    try {
      const paymentResult = await this.paymentService.makePayment(orderInfo);
      // Handle the paymentResult, e.g., send it to the front end
      return paymentResult;
    } catch (error) {
      throw new Error(`Failed to make payment: $error.message`);
    }
  }
}
