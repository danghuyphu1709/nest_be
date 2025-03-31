import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({});
  await app.listen(process.env.PORT ?? 8080);
  console.log(`Application is running on: localhost:${process.env.PORT ?? 8080}`);
}
bootstrap();