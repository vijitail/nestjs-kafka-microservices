import { MakePaymentDto } from '@nestjs-microservices/shared/dto';
import { Controller, ValidationPipe } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('process_payment')
  handleProcessPayment(@Payload(ValidationPipe) data: MakePaymentDto) {
    this.appService.processPayment(data);
  }
}
