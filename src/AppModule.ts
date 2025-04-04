import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
