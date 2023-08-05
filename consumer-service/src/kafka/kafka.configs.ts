import { Partitioners } from 'kafkajs';

const getKafkaConfigs = (kafkaBroker: string) => {
  return {
    client: {
      clientId: 'nestjs-kafka-consumer',
      brokers: [kafkaBroker],
    },
    consumer: {
      groupId: 'nestjs-kafka-group',
      allowAutoTopicCreation: true,
    },
    producer: {
      createPartitioner: Partitioners.LegacyPartitioner,
    },
  };
};

export default getKafkaConfigs;
