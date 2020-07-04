import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'This is a simple API for Angular Jira Clone app using Nestjs with Firebase';
  }
}
