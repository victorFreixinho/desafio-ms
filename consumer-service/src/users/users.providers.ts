import { Mongoose } from 'mongoose';
import { UserSchema } from './schemas/user.schema';
import { databaseProviderKey } from 'src/database/database.providers';

export const userProviderKey = 'USER_MODEL';

export const usersProviders = [
  {
    provide: userProviderKey,
    useFactory: (mongoose: Mongoose) => mongoose.model('User', UserSchema),
    inject: [databaseProviderKey],
  },
];
