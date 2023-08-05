import { Partitioners } from 'kafkajs';

const getKafkaConfigs = (kafkaBroker: string) => {
  return {
    client: {
      clientId: 'nestjs-kafka-producer',
      brokers: [kafkaBroker],
    },
    producer: {
      createPartitioner: Partitioners.LegacyPartitioner,
    },
  };
};

export default getKafkaConfigs;
