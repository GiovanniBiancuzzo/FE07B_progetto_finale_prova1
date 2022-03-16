import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  url = environment.pathApi;

  constructor(private http: HttpClient) { }

  getUtenti(pagina: number) {//chiamata per gli users
    return this.http.get<any>(`${this.url}/api/users?page=${pagina}&size=20&sort=id,ASC`);
  }

  // cancellaUtente(id: number) {//cancellazione fattura
  //   return this.http.delete<any>(`${this.url}/api/users/${id}`);
  // }

}
