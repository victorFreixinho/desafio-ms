import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { KafkaOptions, Transport } from '@nestjs/microservices';

import * as dotenv from 'dotenv';
import getKafkaConfigs from './kafka/kafka.configs';
dotenv.config();

async function startApp() {
  if (!process.env.PORT) {
    throw new Error('Port not found');
  }
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const port = process.env.PORT;
  await app.listen(port, () => {
    Logger.log(`Application is listening on port ${port}`);
  });
}

async function startKafkaApp() {
  if (!process.env.KAFKA_BROKER) {
    throw new Error('Kafka broker not found');
  }
  const kafkaConfigs = getKafkaConfigs(process.env.KAFKA_BROKER);
  const app = await NestFactory.createMicroservice<KafkaOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: { ...kafkaConfigs },
  });

  app.listen();
}

async function bootstrap() {
  await startApp();
  await startKafkaApp();
}

bootstrap();
