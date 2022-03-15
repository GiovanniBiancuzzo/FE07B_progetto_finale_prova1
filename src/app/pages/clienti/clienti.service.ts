import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from 'src/app/models/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClientiService {
  url = environment.pathApi;

  constructor(private http: HttpClient) {}

  getClienti(pagina: Number) {
    //si ottiene l'ennesima pagina composta da 20 fatture
    console.log('getClienti');
    return this.http.get<any>(`${this.url}/api/clienti?page=${pagina}&size=20&sort=id,ASC`);
  }

  modificaStato(fattura: Cliente) {
    //per aggiornare si ripassa tutta la fattura con il solo stato cambiato
    return this.http.put<any>(`${this.url}/api/clienti/${fattura.id}`, fattura);
  }

  cancellaFattura(fattura: Cliente) {
    //cancellazione fattura
    return this.http.delete<any>(`${this.url}/api/clienti/${fattura.id}`);
  }
}
