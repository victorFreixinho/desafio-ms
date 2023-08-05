import { Module } from '@nestjs/common';
import { KafkaProducerService } from './kafka.producer.service';

@Module({
  providers: [],
  exports: [KafkaProducerService],
})
export class KafkaProducerModule {}
