import { Controller, Post, Body } from '@nestjs/common';
import { User } from './user';

import * as admin from 'firebase-admin';
import * as firebaseHelper from 'firebase-functions-helper/dist';
import * as firebase from 'firebase';

import 'firebase/auth';
import 'firebase/database';
import { AuthService } from 'src/services/auth.service';
import { throwError } from 'rxjs';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService
  ) {}

  db = admin.firestore();
  firebaseAuth = firebase.auth();

  @Post()
  async login(@Body() body: { email, password }): Promise<User> {

    await this.firebaseAuth.signInWithEmailAndPassword(body.email, body.password);
    // this.authService.updateUserData(credetial.user)
    // .then(data => console.log(data))
    // .catch(err => throwError(err));

    const authState = await this.firebaseAuth.currentUser;

    const currentUser = firebaseHelper.firestore.getDocument(this.db, 'users', authState.uid);
    return currentUser;
  }

}
