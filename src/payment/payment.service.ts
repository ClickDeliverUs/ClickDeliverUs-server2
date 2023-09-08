import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PaymentService {
  private readonly iamportBaseUrl = 'https://api.iamport.kr';

  async makePayment(orderInfo: any) {
    try {
      const response = await axios.post('${this.iamportApiBaseUrl}/payments/prepare', orderInfo, {
        headers: {
          'content-Type': 'application/json',
          // Add any required headers or Auth here
        },
      });

      return response.data; // You can handle the API response data here
    } catch (error) {
      throw new Error(`failed to make payment: ${error.message}`);
    }
  }

  async createOrder(orderInfo: any, paymentResult: any) {
    try {
      //주문 정보 생성 및 DB에 저장 로직을 추가
      /*const order = new Order();
      order.orderInfo = orderInfo;
      order.paymentInfo = paymentResult;

      await this.orderRepository.save(order);

      return order;*/
      // WIP
    } catch (error) {
      throw new Error(`Failed to create order: ${error.message}`);
    }
  }
}
