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

  login(data: { username: string, password: string }) {
    try {
      console.log(data);
      return this.http.post<User>(`${this.url}/api/auth/login`, data);
    } catch (error) {
      return alert(`Errore in login service: ${error}`);
    }
  }
}
