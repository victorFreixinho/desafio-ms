import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Kafka, Producer } from 'kafkajs';
import getKafkaConfigs from './kafka.configs';

@Injectable()
export class KafkaProducerService {
  private readonly logger = new Logger(KafkaProducerService.name);
  private readonly producer: Producer;

  constructor(private readonly configService: ConfigService) {
    const clientConfigs = getKafkaConfigs(
      this.configService.get('KAFKA_BROKER') as string,
    ).client;
    const kafka = new Kafka(clientConfigs);

    this.producer = kafka.producer();
  }

  async onModuleInit() {
    await this.connect();
  }

  async connect() {
    await this.producer.connect();
  }

  async produce(topic: string, message: any) {
    try {
      await this.producer.send({
        topic,
        messages: [{ value: JSON.stringify(message) }],
      });
    } catch (error) {
      this.logger.error(
        `Failed to produce message to topic "${topic}": ${error.message}`,
      );
    }
  }

  async close() {
    await this.producer.disconnect();
  }
}
