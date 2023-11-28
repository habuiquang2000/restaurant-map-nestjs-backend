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

// import { join } from 'path';
// import { ValidationPipe } from '@nestjs/common';
// import { AuthenticatedSocketAdapter } from './gateway/authenticated-socket.adapter';
// // import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';
// // import { HttpExceptionFilter } from './utils/http-exception.filter';
// // import mongoose from 'mongoose';

// // mongoose.set('useFindAndModify', false);

//   // app.setGlobalPrefix('api');
//   app
//     .useGlobalFilters
//     // new FallbackExceptionFilter(),
//     // new HttpExceptionFilter(),
//     ();
//   app.useGlobalPipes(
//     new ValidationPipe({
//       // transform: true,
//       // skipMissingProperties: true,
//       // whitelist: true,
//       // forbidNonWhitelisted: true,
//       // disableErrorMessages: configuration().nodeEnv == 'PRODUCTION',
//     }),
//   );

//   // const reflector = new Reflector();
//   // app.useGlobalGuards(new JwtAuthGuard());
//   app.useStaticAssets(join(__dirname, '..', 'static'));
//   app.useWebSocketAdapter(new AuthenticatedSocketAdapter(app)); // Add our custom socket adapter.
