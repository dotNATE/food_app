import { Module } from '@nestjs/common';
import {
  AppController,
  TraderController,
  MetricsController,
} from './controllers';
import { AppService, TraderService } from './services';

@Module({
  imports: [],
  controllers: [AppController, TraderController, MetricsController],
  providers: [AppService, TraderService],
})
export class AppModule {}
