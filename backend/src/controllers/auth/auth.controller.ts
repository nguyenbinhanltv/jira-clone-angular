import { Controller, Post, Get, Param } from '@nestjs/common';
import { CurrentUser } from './user';
import * as admin from 'firebase-admin';
import * as firebaseHelper from 'firebase-functions-helper/dist';
import * as firebase from 'firebase';

import 'firebase/auth';
import 'firebase/database';

@Controller('auth')
export class AuthController {

  db = admin.firestore();
  auth = firebase.auth();
  

  @Post()
  login(@Param() params: any): any {
    console.log(params.username);

    if (this.db.collection('users').where('username', '==', params.username).get()) {
      
    }
    return CurrentUser;
  }

  @Get()
  logIn(): any {
    return CurrentUser;
  }
}
