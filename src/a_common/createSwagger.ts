import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function createSwagger(app: NestExpressApplication): void {
  const docs = '/docs';
  const config = new DocumentBuilder()
    //     .addBearerAuth()
    //     // .addSecurity('basic', {
    //     //   type: 'http',
    //     //   scheme: 'basic',
    //     // })
    //     // .addBasicAuth()
    .setTitle('Favorites Restaurant Map')
    .setDescription(
      'This is an api document for `Favorites Restaurant Map` Project',
    )
    .setVersion('1.0')
    // .addTag('School Map')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(docs, app, document);
}
