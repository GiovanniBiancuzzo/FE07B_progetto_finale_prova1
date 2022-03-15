import { Component, AfterViewChecked, OnInit } from '@angular/core';
import { FattureService } from './fatture.service';
import { Fattura } from 'src/app/models/fattura';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { DialogEliminaFattureComponent } from 'src/app/components/dialog-elimina-fatture.component';
import { DialogModificaFattureComponent } from 'src/app/components/dialog-modifica-fatture.component';

@Component({
  templateUrl: './fatture.page.html',
  styleUrls: ['./fatture.page.scss'],
})
export class FatturePage implements OnInit {
  select!: number;

  fatture!: Fattura[];
  pagina: number = 0;
  currentIndex: number = this.pagina;
  displayedColumns = ['id', 'cliente.ragioneSociale', 'importo', 'stato.nome'];

  data = new Date(); //gestione data in fondo alla pagina
  ora = `${this.data.getHours()}:${this.data.getMinutes()}:${this.data.getSeconds()}`;
  giorno = `${this.data.getDate()}/${this.data.getMonth()}/${this.data.getFullYear()}`;

  constructor(
    public fattureSrv: FattureService,
    private router: Router,
    public dialog: MatDialog
  ) {}

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

  creaFattura() {
    this.fattureSrv.creaFattura;
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

  onModificaStato(event: any, fattura: Fattura) {
    //modifica dello stato o eliminazione della fattura tramite switch
    console.log(event);
    switch (event) {
      case '1': {
        console.log(event.value + ' Stato non pagata, in attesa di modifiche');
        let nuovoStato = {
          id: 1,
          nome: 'NON PAGATA',
        };
        fattura.stato = nuovoStato;
        this.fattureSrv.modificaStato(fattura).subscribe((res) => {
          this.dialog.open(DialogModificaFattureComponent);
        });
        break;
      }
      case '2': {
        console.log(event.value + ' Stato pagata, in attesa di modifiche');
        let nuovoStato = {
          id: 2,
          nome: 'PAGATA',
        };
        fattura.stato = nuovoStato;
        this.fattureSrv.modificaStato(fattura).subscribe((res) => {
          this.dialog.open(DialogModificaFattureComponent);
        });
        break;
      }
      case '3': {
        console.log(event.value + ' Stato eliminata, in attesa di modifiche');
        this.fattureSrv.cancellaFattura(fattura.id).subscribe((res) => {
          this.dialog.open(DialogEliminaFattureComponent);
        });
        break;
      }
    }
  }
}
