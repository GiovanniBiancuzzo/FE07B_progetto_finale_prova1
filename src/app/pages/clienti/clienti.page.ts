import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClientiService } from './clienti.service';

@Component({
  templateUrl: './clienti.page.html',
  styleUrls: ['./clienti.page.scss']
})
export class ClientiPage implements OnInit {

  pagina: number = 0;
  clienti!: Cliente[];
  displayedColumns = ['id','ragioneSociale', 'partitaIva', 'emailContatto'];

  constructor(private clientiSrv: ClientiService) { }

  ngOnInit(): void {
    this.clientiSrv.getClienti(this.pagina).subscribe({
      next: (v) => {
        console.log(v.content);
        this.clienti = v.content;
      },
      error: (e) => console.error(e),
      complete: () => console.info('pagina clienti acquisita'),
    })
  }

}
