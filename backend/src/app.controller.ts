import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';
import * as admin from 'firebase-admin';
import * as serviceAccount from '../serviceAccountKey.json';
import * as firebaseConfig from '../firebaseConfig.json';

@Controller()
export class AppController implements OnModuleInit {

  serviceAccountFirebase = serviceAccount as admin.ServiceAccount;

  constructor(private readonly appService: AppService) {}

  onModuleInit(): void {
    admin.initializeApp({
      credential: admin.credential.cert(this.serviceAccountFirebase),
      databaseURL: firebaseConfig.databaseURL
    });
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
