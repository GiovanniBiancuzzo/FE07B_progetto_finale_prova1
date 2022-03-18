import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../../models/cliente';
import { ClientiService } from '../../pages/clienti/clienti.service';
import { FattureService } from '../../pages/fatture/fatture.service';

@Component({
  selector: 'app-card-contatti-cliente',
  template: `
  <style>
    * {
      margin: 10px;
    }
  </style>

    <mat-card class="example-card">
      <mat-card-title>Contatti</mat-card-title>
      <mat-card-subtitle>Personale</mat-card-subtitle>
      <mat-card-content>
        <p>
          Nome e cognome: {{ cliente.nomeContatto }}
          {{ cliente.cognomeContatto }}
        </p>
        <p>Email: {{ cliente.emailContatto }}</p>
        <p>Telefono: {{ cliente.telefonoContatto }}</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [],
})
export class CardContattiClienteComponent implements OnInit {
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
