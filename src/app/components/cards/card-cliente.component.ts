import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../../models/cliente';
import { ClientiService } from '../../pages/clienti/clienti.service';
import { FattureService } from '../../pages/fatture/fatture.service';

@Component({
  selector: 'app-card-cliente',
  template: `
    <style>
      mat-card-header {
        justify-content: space-around;
      }
      .example-header-image {
        background-image: url('https://epicode.com/assets/logo.svg');
        background-size: cover;
      }
      img {
        width: 100px;
        height: auto;
      }
    </style>

    <mat-card class="example-card">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <img mat-card-image src="assets/img/img_191958.png" alt="Profilo" />
      </mat-card-header>
      <mat-card-title>Dettagli cliente</mat-card-title>
      <mat-card-subtitle></mat-card-subtitle>
      <mat-card-content>
        <p>Ragione Sociale: {{ cliente.ragioneSociale }}</p>
        <p>Partita Iva: {{ cliente.partitaIva }}</p>
        <!-- <p>Fatturato Annuale: {{ cliente.fatturatoAnnuale | currency }}</p> -->
      </mat-card-content>
    </mat-card>
  `,
  styles: [],
})
export class CardClienteComponent implements OnInit {
  pageId!: number;
  cliente!: Cliente;
  path = this.router.routeConfig?.path;
  constructor(
    private fattureSrv: FattureService,
    private router: ActivatedRoute,
    private clientiSrv: ClientiService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe({
      next: (v) => {
        console.log(v['id']);
        console.log(this.router.routeConfig?.path);
        this.pageId = v['id'];
      },
      error: (e) => console.error(e),
      complete: () => console.info('id fattura acquisita'),
    });
    if (this.path == 'clienti/:id') {
      //se vieni da clienti
      this.clientiSrv.getDettagliCliente(this.pageId).subscribe({
        next: (v) => {
          console.log(v);
          this.cliente = v;
        },
        error: (e) => console.error(e),
        complete: () => console.info('dettagli cliente per card acquisiti'),
      });
    } else if (this.path == 'fatture/:id') {
      //se vieni da fatture
      this.fattureSrv.getDettagliFattura(this.pageId).subscribe({
        next: (v) => {
          console.log(v.cliente);
          this.cliente = v.cliente;
        },
        error: (e) => console.error(e),
        complete: () => console.info('dettagli cliente per card acquisiti'),
      });
    }
  }
}
