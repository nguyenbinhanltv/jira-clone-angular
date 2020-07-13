import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { User } from 'src/controllers/auth/user';

@Injectable()
export class AuthService {
  
    db = admin.firestore();

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    updateUserData(user: any): Promise<FirebaseFirestore.WriteResult> {
        const userRef = this.db.doc(`users/${user.uid}`);

        const data: User = {
            id: user.uid,
            name: user.displayName,
            avatarUrl: user.photoURL,
            createdAt: new Date().toISOString().toString(),
            updatedAt: new Date().toISOString().toString()
        };

        return userRef.set(data, { merge : true });
    }
}