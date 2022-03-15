import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../models/cliente';
import { FattureService } from '../pages/fatture/fatture.service';

@Component({
  selector: 'app-card-cliente',
  template: `
    <style>
      /* personalizza card */
      .example-card {
        max-width: 400px;
        text-align: end;

      }
      mat-divider,
      mat-card-title {
        padding-bottom: 15px;
      }
    </style>

    <mat-card class="example-card">
      <mat-card-title
        >Ragione Sociale: {{ cliente.ragioneSociale }}</mat-card-title
      >
      <mat-card-subtitle
        >Nome e cognome: {{ cliente.nomeContatto }}
        {{ cliente.cognomeContatto }}</mat-card-subtitle
      >
      <mat-card-subtitle
        >Partita Iva: {{ cliente.partitaIva }}</mat-card-subtitle
      >
      <mat-card-content>
        <p>Contatti azienda</p>
        <p>Pec: {{ cliente.pec }}</p>
        <p>Email: {{ cliente.email }}</p>
        <p>Telefono: {{ cliente.telefono }}</p>
        <p>
          Indirizzo: {{ cliente.indirizzoSedeOperativa.via
          }}{{ cliente.indirizzoSedeOperativa.civico
          }}{{ cliente.indirizzoSedeOperativa.localita }}
        </p>
      </mat-card-content>
      <mat-divider inset></mat-divider>
      <mat-card-content>
        <p>Contatti cliente</p>
        <p>Email: {{ cliente.emailContatto }}</p>
        <p>Telefono: {{ cliente.telefonoContatto }}</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [],
})
export class CardClienteComponent implements OnInit {
  pageId!: number;
  cliente!: Cliente;

  constructor(
    private fattureSrv: FattureService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe({
      next: (v) => {
        console.log(v['id']);
        this.pageId = v['id'];
      },
      error: (e) => console.error(e),
      complete: () => console.info('id fattura acquisita'),
    });
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
