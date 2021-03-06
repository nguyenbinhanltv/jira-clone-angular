import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';

import * as admin from 'firebase-admin';
import * as serviceAccount from '../serviceAccountKey.json';
import * as firebaseConfig from '../firebaseConfig.json';
import * as bodyParser from 'body-parser';

import * as firebase from 'firebase';

const server = express();
const serviceAccountFirebase = serviceAccount as admin.ServiceAccount;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountFirebase),
  databaseURL: firebaseConfig.databaseURL
});

firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  return app.init();
};

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

createNestServer(server)
.then(() => console.log('Server Running'))
.catch(err => console.error('Server broken', err));

export const api = functions.https.onRequest(server);