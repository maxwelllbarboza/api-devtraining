import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.for],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
