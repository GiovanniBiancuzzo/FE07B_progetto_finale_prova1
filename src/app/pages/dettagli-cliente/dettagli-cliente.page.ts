import { Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogEliminaFattureComponent } from '../../components/dialog/dialog-elimina-fatture.component';
import { DialogModificaFattureComponent } from '../../components/dialog/dialog-modifica-fatture.component';
import { Fattura } from '../../models/fattura';
import { ClientiService } from '../clienti/clienti.service';
import { FattureService } from '../fatture/fatture.service';

@Component({
  selector: 'dettagli-cliente',
  templateUrl: './dettagli-cliente.page.html',
  styleUrls: ['./dettagli-cliente.page.scss'],
})
export class DettagliClientePage implements OnInit {

  clienteId!: number;
  fatture!: Fattura[];
  pagina: number = 0;
  currentIndex: number = this.pagina;
  displayedColumns = ['id', 'cliente.ragioneSociale', 'importo', 'stato.nome'];


  data = new Date(); //gestione data in fondo alla pagina
  ora = `${this.data.getHours()}:${this.data.getMinutes()}:${this.data.getSeconds()}`;
  giorno = `${this.data.getDate()}/${this.data.getMonth()}/${this.data.getFullYear()}`;

  constructor(
    public fattureSrv: FattureService,
    private clienteSrv: ClientiService,
    public dialog: MatDialog,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe({
      next: (v) => {
        console.log(v['id']);
        this.clienteId = v['id'];
      },
      error: (e) => console.error(e),
      complete: () => console.info('id fattura acquisita'),
    });
  }

  ngAfterViewChecked() {
    console.log('dopo caricamento');
  }

  avanzaPagina() {
    //pagina successiva di fatture
    this.currentIndex++;
    console.log(this.currentIndex);
    this.fattureSrv.getFattureDaCliente(this.clienteId,this.currentIndex).subscribe({
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
    this.fattureSrv.getFattureDaCliente(this.clienteId,this.currentIndex).subscribe({
      next: (v) => {
        console.log(v.content);
        this.fatture = v.content;
      },
      error: (e) => console.error(e),
      complete: () => console.info('pagina fatture acquisita'),
    });
  }

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
          //forse si può passare statofattura
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

  mostraFatture(clienteId: number) {
    this.fattureSrv.getFattureDaCliente(clienteId, this.pagina).subscribe({
      next: (v) => {
        console.log(v.content);
        this.fatture = v.content;
      },
      error: (e) => {
        console.error('errore nella stampa dettagli cliente');
        console.error(e);
      },
      complete: () => console.info('stampa fatture singolo cliente completata'),
    });
  }


  deleteAll() {
    //cancellazione cliente e fatture associate
    this.clienteSrv.cancellaCliente(this.clienteId).subscribe({
      next: (v) => {
        console.log('cancellazione cliente');
        console.log(v);
      },
      error: (e) => {
        console.error('errore nella cancellazione');
        console.error(e);
      },
      complete: () => console.info('cancellazione cliente completata'),
    });
    this.fattureSrv.cancellaFatture(this.clienteId).subscribe({
      next: (v) => {
        console.log("cancellazione fatture")
        console.log(v);
      },
      error: (e) => console.error("errore nella cancellazione" + e),
      complete: () => console.info('cancellazione fatture completata'),
    });
    setTimeout(() => {
      this.route.navigate(['/clienti']);
    }, 1000);
  }
}
