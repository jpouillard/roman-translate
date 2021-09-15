import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './config/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(PORT);
}
bootstrap();
