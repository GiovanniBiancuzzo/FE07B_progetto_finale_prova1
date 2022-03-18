import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { IndirizzoSedeLegale } from 'src/app/models/indirizzo-sede-legale';
import { IndirizzoSedeOperativa } from 'src/app/models/indirizzo-sede-operativa';
import { ClientiService } from '../clienti/clienti.service';

@Component({
  templateUrl: './crea-cliente.page.html',
  styleUrls: ['./crea-cliente.page.scss']
})
export class CreaClientePage implements OnInit {

  clienteId!: number;
  cliente!: Cliente;
  indirizzoSedeOperativa!: IndirizzoSedeOperativa;
  indirizzoSedeLegale!: IndirizzoSedeLegale
  newCliente!: Cliente;

  //newClient: Clients = new Clients();

  constructor(
    private route: Router,
    private clientiSrv: ClientiService
  ) {}

  ngOnInit(): void {}

  // ngAfterViewChecked() {
  //   console.log('dopo ripristino');
  // }

  onCreaCliente() {
    // console.log("oncliente");
    // this.cliente = form.value;
    // console.log(this.cliente)

    // this.indirizzoSedeLegale.via = dati.indirizzoSedeLegale.via;
    // this.indirizzoSedeLegale.civico = dati.indirizzoSedeLegale.civico;
    // this.indirizzoSedeLegale.cap = dati.indirizzoSedeLegale.cap;
    // this.indirizzoSedeLegale.localita = dati.indirizzoSedeLegale.localita;

    // this.cliente.ragioneSociale = dati.ragioneSociale;
    // this.cliente.partitaIva = dati.partitaIva;
    // this.cliente.email = dati.email;
    // this.cliente.pec = dati.pec;
    // this.cliente.telefono = dati.telefono;
    // this.cliente.tipoCliente = dati.tipoCliente;
    // this.cliente.indirizzoSedeLegale.via = dati.indirizzoSedeLegale.via;
    // this.cliente.indirizzoSedeLegale.civico = dati.indirizzoSedeLegale.civico;
    // this.cliente.indirizzoSedeLegale.cap = dati.indirizzoSedeLegale.cap;
    // this.cliente.indirizzoSedeLegale.localita = dati.indirizzoSedeLegale.localita;

    console.log(this.newCliente);
    this.clientiSrv.creaCliente(this.newCliente).subscribe({
      next: (v) => {
        alert('creato cliente con successo');
        console.log(v);
        this.route.navigate(['/clienti']);
      },
      error: (e) => console.log(e),
      complete: () => console.log('creato cliente con successo'),
    });
  }
}
