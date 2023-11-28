import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import configuration from './a_config/configuration';

// import { MulterModule } from '@nestjs/platform-express';
// import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { ApisModule } from './apis/apis.module';
// import { AuthModule } from './auth/auth.module';
// import { DatabaseModule } from './database/database.module';
// import { GraphqlsModule } from './graphqls/graphqls.module';
// import { SocketModule } from './gateway/socket.module';
// import { UploadsModule } from './uploads/uploads.module';




// // import { APP_GUARD } from '@nestjs/core';
// // import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      envFilePath: '.env',
    }),
    //     GraphQLModule.forRoot<ApolloDriverConfig>({
    //       driver: ApolloDriver,
    //       autoSchemaFile: 'schema.gql',
    //     }),
    //     GraphqlsModule,
    //     MulterModule.register({ dest: './uploads' }),
    //     ApisModule,
    //     DatabaseModule,
    //     AuthModule,
    //     SocketModule,
    //     UploadsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
})
export class AppModule {
  // @InjectConnection() private connection: Connection;
  onModuleInit() {
    // execute logic + access mongoDB via this.connection
    // console.log(`MongoDB connected ${this.connection.host}`);
  }
}



