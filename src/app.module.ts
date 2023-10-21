import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [CacheModule.register(), RedisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
