import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('createOrder') // Create an order and returns the order info to the front end
  async createOrder(@Body() orderInfo: any) {
    try {
      //Create an order and get the order details
      const order = await this.paymentService.createOrder(orderInfo, 0); // 수정중
      // Handle the order and get the order details
      return order;
    } catch (error) {
      // Handle errors Here
      throw new Error(`Failed to create order: ${error.message}`);
    }
  }

  @Post('makePayment') // Make the payment  using the provided payment info
  async makePayment(@Body() orderInfo: any) {
    const paymentResult = await this.paymentService.makePayment(orderInfo);
    // Handle the paymentResult, e.g., send it to the front end
    return paymentResult;
  }
}
