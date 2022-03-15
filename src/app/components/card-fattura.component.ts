import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fattura } from '../models/fattura';
import { FattureService } from '../pages/fatture/fatture.service';

@Component({
  selector: 'app-card-fattura',
  template: `
    <style> /* personalizza card */
      .example-card {
        max-width: 400px;
      }
      mat-divider, mat-card-title {
        padding-bottom: 15px;
      }
    </style>

    <mat-card class="example-card">
      <mat-card-title>Fattura n.{{ fattura.numero }} per </mat-card-title>
      <mat-card-subtitle>Partita Iva: 15878411006</mat-card-subtitle>
      <mat-card-content>
        <p>Importo fattura: {{ fattura.numero | currency : 'EUR'}}</p>
        <p>Stato fattura: {{ fattura.stato.nome}}</p>
        <p>Data: {{ fattura.data | date }}</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [],
})
export class CardFatturaComponent implements OnInit {

  pageId!: number;
  fattura!: Fattura;

  constructor(private fattureSrv: FattureService, private router: ActivatedRoute) { }

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
          console.log(v);
          this.fattura = v;
        },
        error: (e) => console.error(e),
        complete: () => console.info('dettagli fattura per card acquisiti'),
    });
  }
}
