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

  getDettagliCliente(id: Number) {
    //dettagli singolo cliente
    return this.http.get<any>(`${this.url}/api/clienti/${id}`);
  }

  creaCliente(cliente: Cliente) {//crea cliente
    return this.http.post<any>(`${this.url}/api/clienti`, cliente);
  }

  modificaCliente(cliente: Cliente) {//modifica cliente
    return this.http.put<any>(`${this.url}/api/clienti/${cliente.id}`, cliente);
  }

  cancellaCliente(id: number) {//cancellazione cliente
    return this.http.delete<any>(`${this.url}/api/clienti/${id}`);
  }
}
