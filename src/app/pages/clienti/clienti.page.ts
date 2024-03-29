import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { FattureService } from '../fatture/fatture.service';
import { ClientiService } from './clienti.service';

@Component({
  templateUrl: './clienti.page.html',
  styleUrls: ['./clienti.page.scss'],
})
export class ClientiPage implements OnInit {
  pagina: number = 0;
  clienti!: Cliente[];
  currentIndex: number = this.pagina;
  displayedColumns = ['id', 'ragioneSociale', 'partitaIva', 'telefono' ,'email'];

  data = new Date();
  ora = `${this.data.getHours()}:${this.data.getMinutes()}:${this.data.getSeconds()}`;
  giorno = `${this.data.getDate()}/${this.data.getMonth()}/${this.data.getFullYear()}`;

  constructor(private clientiSrv: ClientiService, public fattureSrv: FattureService) {}

  ngOnInit(): void {
    this.clientiSrv.getClienti(this.pagina).subscribe({
      next: (v) => {
        console.log(v.content);
        this.clienti = v.content;
      },
      error: (e) => console.error(e),
      complete: () => console.info('pagina clienti acquisita'),
    });
  }
  ngAfterViewChecked() {
    console.log('dopo caricamento');
  }

  creaCliente() {//da finire
    this.clientiSrv.creaCliente;
  }

  avanzaPagina() {
    //pagina successiva di fatture
    this.currentIndex++;
    console.log(this.currentIndex);
    this.clientiSrv.getClienti(this.currentIndex).subscribe({
      next: (v) => {
        console.log(v.content);
        this.clienti = v.content;
      },
      error: (e) => console.error(e),
      complete: () => console.info('pagina fatture acquisita'),
    });
  }

  indietroPagina() {
    //pagina precedente di fatture
    this.currentIndex--;
    console.log(this.currentIndex);
    this.clientiSrv.getClienti(this.currentIndex).subscribe({
      next: (v) => {
        console.log(v.content);
        this.clienti = v.content;
      },
      error: (e) => console.error(e),
      complete: () => console.info('pagina fatture acquisita'),
    });
  }

  //sistemare prima e ultima pagina

  mandaMail(mail: string) {
    console.log("mail");
    window.location.href = "mailto:" + mail;
  }

  chiama(tel: number) {
    console.log("tel");
    window.location.href = "telto:" + tel;
  }
}
