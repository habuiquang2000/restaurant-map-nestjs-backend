import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import configuration from './a_config/configuration';
import { getLANInfo } from './a_common/logRequest';
import { createSwagger } from './a_common/createSwagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // logger: false,
    logger: ['error', 'warn'],
  });
  app.enableCors();

  const PORT = configuration().port;

  createSwagger(app);
  await app.listen(PORT);
  getLANInfo(PORT);
}
bootstrap();
