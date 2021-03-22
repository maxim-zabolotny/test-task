import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes/validate.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({
  //   origin: true,
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //   credentials: true,
  // });
  app.enableCors();
  app.setGlobalPrefix('api');
  // handle all user input validation globally
  app.useGlobalPipes(new ValidateInputPipe());
  await app.listen(4000);
}
bootstrap();
