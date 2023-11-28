import { NestFactory } from '@nestjs/core';

import configuration from './a_config/configuration';
import { getLANInfo } from './a_common/logRequest';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = configuration().port;
  await app.listen(PORT);

  getLANInfo(PORT);
}
bootstrap();
