import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fattura } from 'src/app/models/fattura';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  url = environment.pathApi

  constructor(private http: HttpClient) { }

  getFatture(pagina: Number) {//si ottiene l'ennesima pagina composta da 20 fatture
    console.log("getFatture")
    return this.http.get<any>(`${this.url}/api/fatture?page=${pagina}&size=20&sort=id,ASC`);
  }

  dettagliFattura(fattura: Fattura) {//singola fattura
    return this.http.get<any>(`${this.url}/api/fatture/${fattura.id}`);
  }

  modificaStato(fattura: Fattura) {//per aggiornare si ripassa tutta la fattura con il solo stato cambiato
    return this.http.put<any>(`${this.url}/api/fatture/${fattura.id}`, fattura);
  }

  cancellaFattura(fattura: Fattura) {//cancellazione fattura
    return this.http.delete<any>(`${this.url}/api/fatture/${fattura.id}`);
  }
}
