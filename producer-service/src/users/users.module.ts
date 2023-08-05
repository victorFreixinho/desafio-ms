import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { KafkaProducerModule } from 'src/kafka/kafka.producer.module';

@Module({
  imports: [KafkaProducerModule],
  controllers: [UsersController],
})
export class UsersModule {}
