import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { MakePaymentDto } from '@nestjs-microservices/shared/dto';

@Injectable()
export class PaymentService {
  constructor(
    @Inject('PAYMENT_MICROSERVICE') private readonly paymentClient: ClientKafka
  ) {}

  makePayment(makePaymentDto: MakePaymentDto) {
    this.paymentClient.emit('process_payment', JSON.stringify(makePaymentDto));
  }
}
