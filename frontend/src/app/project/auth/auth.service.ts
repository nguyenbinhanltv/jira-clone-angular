import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JUser } from '@trungk18/interface/user';
import { of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { AuthStore } from './auth.store';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl: string;
  public isLogin: boolean = false;

  constructor(
    private http: HttpClient,
    private store: AuthStore,
    ) {
    this.baseUrl = environment.apiUrl;
    console.log(this.store.getValue());
  }

  login({ email = '', password = '' }: LoginPayload) {
    this.store.setLoading(true);
    this.http
      .post<JUser>(`${this.baseUrl}/auth`, {
        email,
        password
      })
      .pipe(
        map((user) => {
          this.store.update((state) => ({
            ...state,
            ...user
          }));

          this.isLogin = user !== null;
        }),
        finalize(() => {
          this.store.setLoading(false);
        }),
        catchError((err) => {
          this.store.setError(err);
          return of(err);
        })
      )
      .subscribe();
  }
}

export class LoginPayload {
  email: string;
  password: string;
  constructor({ email, password }: FormLogin) {
    this.email = email;
    this.password = password;
  }
}

export interface FormLogin {
  email: string;
  password: string;
}
