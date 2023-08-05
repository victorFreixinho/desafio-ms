import { Controller, Post, Body, Logger, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ClientKafka, MessagePattern } from '@nestjs/microservices';
import getKafkaConfigs from 'src/kafka/kafka.configs';
import { ConfigService } from '@nestjs/config';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  static readonly CREATE_USER_TOPIC = 'new.user.created';
  private static readonly logger = new Logger(UsersController.name);
  private readonly client: ClientKafka;

  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
  ) {
    this.client = new ClientKafka(
      getKafkaConfigs(this.configService.get('KAFKA_BROKER') as string),
    );
  }

  onModuleInit() {
    //
    this.client.subscribeToResponseOf(UsersController.CREATE_USER_TOPIC);
  }

  @Post()
  @MessagePattern(UsersController.CREATE_USER_TOPIC)
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService
      .create(createUserDto)
      .catch(UsersController.logger.error);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll().catch(UsersController.logger.error);
  }
}
