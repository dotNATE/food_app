import { Module } from '@nestjs/common';
import { AppController, MetricsController } from './controllers';
import { AppService } from './services';

@Module({
  imports: [],
  controllers: [AppController, MetricsController],
  providers: [AppService],
})
export class AppModule {}
