import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  url: string = environment.pathApi;

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
    return this.http.post<any>(`${this.url}/api/auth/signup`, user);
  }

  logout() {
    localStorage.removeItem('user');
  }
}
