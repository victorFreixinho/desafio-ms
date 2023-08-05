import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { KafkaProducerModule } from './kafka/kafka.producer.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    KafkaProducerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
