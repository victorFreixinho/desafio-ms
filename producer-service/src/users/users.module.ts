import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { KafkaProducerService } from 'src/kafka/kafka.producer.service';
import { KafkaProducerModule } from 'src/kafka/kafka.producer.module';

@Module({
  imports: [KafkaProducerModule],
  controllers: [UsersController],
  providers: [KafkaProducerService],
})
export class UsersModule {}
