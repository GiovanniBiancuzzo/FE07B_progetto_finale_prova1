import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../../models/cliente';
import { ClientiService } from '../../pages/clienti/clienti.service';
import { FattureService } from '../../pages/fatture/fatture.service';

@Component({
  selector: 'app-card-cliente-sede-operativa',
  template: `
    <mat-card class="example-card">
      <mat-card-title>Sede Operativa</mat-card-title>
      <mat-card-subtitle>Indirizzo</mat-card-subtitle>
      <mat-card-content>
        <p>
          {{ cliente.indirizzoSedeOperativa.via }}
          {{ cliente.indirizzoSedeOperativa.civico }},
          {{ cliente.indirizzoSedeOperativa.localita }}
        </p>
        <p>CAP {{ cliente.indirizzoSedeOperativa.civico }}</p>
        <!-- <p>{{ cliente.indirizzoSedeOperativa.comune }}</p> -->

      </mat-card-content>
    </mat-card>
  `,
  styles: [],
})
export class CardClienteSedeOperativaComponent implements OnInit {
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
