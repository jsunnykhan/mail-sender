import { FactoryProvider } from '@nestjs/common';
import { REDIS_CLIENT, RedisClient } from './redis-client.type';
import { createClient } from 'redis';

export const redisClientFactory: FactoryProvider<Promise<RedisClient>> = {
  provide: REDIS_CLIENT,
  useFactory: async () => {
    // redis://default:CPkRIlVIGaQDuV6HLtTmNxPG9eBnsI6V@redis-18972.c93.us-east-1-3.ec2.cloud.redislabs.com:18972
    const client = createClient({
      //   username: 'redis',
      password: 'CPkRIlVIGaQDuV6HLtTmNxPG9eBnsI6V',
      database: 0,
      socket: {
        host: 'redis-18972.c93.us-east-1-3.ec2.cloud.redislabs.com',
        port: 18972,
      },
    });
    client.on('error', (err: any) => console.log(err));
    const a = await client.connect();
    console.log({ a });
    return client;
  },
};

// username: '', password: '123456' ,
