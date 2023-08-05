import { Controller, Post, Body, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { KafkaProducerService } from '../kafka/kafka.producer.service';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  static readonly CREATE_USER_TOPIC = 'new.user.created';

  constructor(private readonly kafkaProducerService: KafkaProducerService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    await this.kafkaProducerService.produce(
      UsersController.CREATE_USER_TOPIC,
      createUserDto,
    );
  }
}
