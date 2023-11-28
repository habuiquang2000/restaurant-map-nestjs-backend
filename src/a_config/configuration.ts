// import { ConfigService } from '@nestjs/config';

export default () => {
  // const configService = app.get(ConfigService);
  // const PORT = configService.get<number>('PORT');

  return {
    port: parseInt(process.env.PORT, 10) || 3000,
    nodeEnv: process.env.NODE_ENV || 'DEVELOPEMENT' || 'PRODUCTION',

    database: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    },

    mongouri: process.env.MONGO_URI,

    jwt: {
      expire: {
        access: process.env.JWT_ACCES_EXPIRE,
        refresh: process.env.JWT_REFRESH_EXPIRE,
      },
      secret: process.env.JWT_SECRET,
    },

    cloudinary: {
      name: process.env.CLOUDINARY_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
    },

    socketPort:
      parseInt(process.env.SOCKET_PORT, 10) ||
      parseInt(process.env.PORT, 10) ||
      3000,

    graphql: {
      playground: process.env.GRAPHQL_PLAYGROUND === 'true',
      introspection: process.env.GRAPHQL_INTROSPECTION === 'true',
    },

    apis: {
      users: {
        host: process.env.USERS_API_HOST,
        port: parseInt(process.env.USERS_API_PORT, 10) || 3001,
      },
    },

    email: {
      sendgrid_reset_templateid: process.env.SENDGRID_RESET_TEMPLATEID,
    },
  };
};

export const authKey: string = 'jwt';
export const isPublicKey = 'publicKey';

export enum schemaConfigs {
  STUDENT_MODEL,
  SCHOOL_MODEL,
  ENROLL_MODEL,
  TEACHER_MODEL,
}

export const dbConfigs = 'DATABASE_CONNECTION';
