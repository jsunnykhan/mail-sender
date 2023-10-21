import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common';
import { REDIS_CLIENT, RedisClient } from './redis-client.type';

@Injectable()
export class RedisService implements OnModuleDestroy {
  constructor(@Inject(REDIS_CLIENT) private readonly redis: RedisClient) {}
  onModuleDestroy() {
    this.redis.quit();
  }

  ping() {
    return this.redis.ping();
  }

  async publishNotification(message: Record<string, any>) {
    await this.redis.XADD('Notification' , '9', message , {NOMKSTREAM:true});

    const info = await this.redis.XINFO_STREAM('Notification');
    console.log({ info });
  }
}
