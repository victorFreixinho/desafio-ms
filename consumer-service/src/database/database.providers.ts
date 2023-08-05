import * as mongoose from 'mongoose';

export const databaseProviderKey = 'DATABASE_CONNECTION';

export const databaseProviders = [
  {
    provide: databaseProviderKey,
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(`mongodb://mongodb:27017/test`),
  },
];
