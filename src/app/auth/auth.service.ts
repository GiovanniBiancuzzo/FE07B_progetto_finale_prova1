import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserAuth } from '../models/user-auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = environment.pathApi;
  // private authSubj = new BehaviorSubject<null | UserAuth>(null);
  // user$ = this.authSubj.asObservable();
  // timeoutLogout: any;

  constructor(private http: HttpClient) {}

  login(data: { username: string; password: string }) {
    try {
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data));
      return this.http.post<any>(`${this.url}/api/auth/login`, data);
    } catch (error) {
      return console.log('Errore in login service' + error);
    }
  }

  signup(data: { name: string; email: string; password: string }) {
    console.log('signup auth service ' + data);
    return this.http.post(`${this.url}/api/auth/signup`, data);
  }

  logout() {
    localStorage.removeItem('user');
  }
  // restore() {
  //   const user = localStorage.getItem('user');
  //   if (!user) {
  //     return;
  //   }
  //   const userdata: UserAuth = JSON.parse(user);
  //   if (this.jwtHelper.isTokenExpired(userdata.accessToken)) {
  //     return;
  //   }
  //   this.authSubj.next(userdata);

  //   this.autoLogout(userdata);
  // }

  // autoLogout(data: UserAuth) {
  //   const exDate = this.jwtHelper.getTokenExpirationDate(
  //     data.accessToken
  //   ) as Date;
  //   const exMs = exDate.getTime() - new Date().getTime();
  //   this.timeoutLogout = setTimeout(() => {
  //     this.logout();
  //   }, exMs);
  // }
}
