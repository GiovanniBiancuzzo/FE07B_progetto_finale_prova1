import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { UserAuth } from '../models/user-auth';
import { UserRole } from '../models/user-role';

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

  signup(user: User) {
    console.log(user);
    // form = this.user;
    // console.log(this.user);
    // if (form.roles == "ROLE_ADMIN") {
    //   this.user.roles[0].id = 1;
    //   this.user.roles[0].roleName = "ROLE_ADMIN";
    // } else if (form.roles == "ROLE_USER") {
    //   this.user.roles[0].id = 2;
    //   this.user.roles[0].roleName = "ROLE_USER";
    // }
    return this.http.post<User>(`${this.url}/api/auth/signup`, user);
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
