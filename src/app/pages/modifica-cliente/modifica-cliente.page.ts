import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClientiService } from '../clienti/clienti.service';

@Component({
  templateUrl: './modifica-cliente.page.html',
  styleUrls: ['./modifica-cliente.page.scss'],
})
export class ModificaClientePage implements OnInit {
  clienteId!: number;
  cliente!: Cliente;
  newCliente!: Cliente;

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private clientiSrv: ClientiService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe({
      next: (v) => {
        console.log(v['id']);
        this.clienteId = v['id'];
      },
      error: (e) => console.log(e),
      complete: () => console.log('id cliente acquisito'),
    });
    this.clientiSrv.getDettagliCliente(this.clienteId).subscribe({
      next: (v) => {
        console.log(v);
        this.cliente = v;
        this.newCliente = v;
      },
      error: (e) => console.log(e),
      complete: () => console.log('info cliente acquisite'),
    });
  }

  // ngAfterViewChecked() {
  //   console.log('dopo ripristino');
  // }

  onModificaCliente(cliente: Cliente) {
    this.clientiSrv.modificaCliente(cliente).subscribe({
      next: (v) => {
        alert('modificato cliente con successo');
        console.log(v);
        this.route.navigate(['/clienti', this.clienteId]);
      },
      error: (e) => console.log(e),
      complete: () => console.log('modificato cliente con successo'),
    });
  }

  ripristinaForm() {//incompleta
    this.newCliente = this.cliente;
  }

  svuotaForm() {//incompleta
    this.newCliente
  }
}
