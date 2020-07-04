import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';

const server = express();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  return app.init();
};

server.use(cors());

createNestServer(server)
.then(() => console.log('Server Running'))
.catch(err => console.error('Server broken', err));

export const api = functions.https.onRequest(server);