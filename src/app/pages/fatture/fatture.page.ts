import { Component, AfterViewChecked, OnInit } from '@angular/core';

import { FattureService } from './fatture.service';

import { Fattura } from 'src/app/models/fattura';

@Component({
  templateUrl: './fatture.page.html',
  styleUrls: ['./fatture.page.scss'],

})
export class FatturePage implements OnInit {

  fatture!: Fattura[];
  pagina: number = 0;
  currentIndex: number = this.pagina;
  displayedColumns = ['id', 'cliente.ragioneSociale', 'importo', 'stato.nome'];

  data = new Date(); //gestione data in fondo alla pagina
  ora = `${this.data.getHours()}:${this.data.getMinutes()}:${this.data.getSeconds()}`;
  giorno = `${this.data.getDate()}/${this.data.getMonth()}/${this.data.getFullYear()}`;

  constructor(public fattureSrv: FattureService) {}

  ngOnInit() {
    this.pagina;
    this.fattureSrv.getFatture(this.pagina).subscribe({
      next: (v) => {
        console.log(v.content);
        this.fatture = v.content;
      },
      error: (e) => console.error(e),
      complete: () => console.info('pagina fatture acquisita'),
    });
  }

  ngAfterViewChecked() {
    console.log('dopo caricamento');
  }

  avanzaPagina() {
    //pagina successiva di fatture
    this.currentIndex++;
    console.log(this.currentIndex);
    this.fattureSrv.getFatture(this.currentIndex).subscribe({
      next: (v) => {
        console.log(v.content);
        this.fatture = v.content;
      },
      error: (e) => console.error(e),
      complete: () => console.info('pagina fatture acquisita'),
    });
  }

  indietroPagina() {
    //pagina precedente di fatture
    this.currentIndex--;
    console.log(this.currentIndex);
    this.fattureSrv.getFatture(this.currentIndex).subscribe({
      next: (v) => {
        console.log(v.content);
        this.fatture = v.content;
      },
      error: (e) => console.error(e),
      complete: () => console.info('pagina fatture acquisita'),
    });
  }

  //sistemare prima e ultima pagina
}
