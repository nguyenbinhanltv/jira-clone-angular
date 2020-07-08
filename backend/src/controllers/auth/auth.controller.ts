import { Controller, Post, Body } from '@nestjs/common';
import { User, CurrentUser } from './user';

import * as admin from 'firebase-admin';
import * as firebaseHelper from 'firebase-functions-helper/dist';
import * as firebase from 'firebase';

import 'firebase/auth';
import 'firebase/database';
import { AuthService } from 'src/services/auth.service';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService
  ) {}

  db = admin.firestore();
  firebaseAuth = firebase.auth();
  

  @Post()
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async login(@Body() body): Promise<User> {

    // const credetial = await this.firebaseAuth.signInWithEmailAndPassword(body.email, body.password);
    // this.authService.updateUserData(credetial.user)
    // .then(data => console.log(data));

    // return firebaseHelper.firestore.getDocument(this.db, 'users', credetial.user.uid);
    return CurrentUser;
  }

}
