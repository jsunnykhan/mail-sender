import { FactoryProvider } from '@nestjs/common';
import { REDIS_CLIENT, RedisClient } from './redis-client.type';
import { createClient } from 'redis';

export const redisClientFactory: FactoryProvider<Promise<RedisClient>> = {
  provide: REDIS_CLIENT,
  useFactory: async () => {
    const client = createClient({ url: 'redis://redis:6379/0' });
    client.on('error', (err: any) => console.log({ err }));
    const a = await client.connect();
    console.log({ a });
    return client;
  },
};
