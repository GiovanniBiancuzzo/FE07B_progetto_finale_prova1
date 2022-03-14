import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { FattureService } from './fatture.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Fattura } from 'src/app/models/fattura';

@Component({
  templateUrl: './fatture.page.html',
  styleUrls: ['./fatture.page.scss'],
  //(animations: [
  //(  trigger('detailExpand', [
  //(    state('collapsed', style({ height: '0px', minHeight: '0' })),
  //(    state('expanded', style({ height: '*' })),
  //(    transition(
  //(      'expanded <=> collapsed',
  //(      animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
  //(    ),
  //(  ]),
  //(],
})
export class FatturePage implements OnInit {

  pagina: number = 0;
  currentIndex: number = this.pagina;
  fatture!: Fattura[];
  displayedColumns = ['id','cliente.ragioneSociale', 'importo', 'stato.nome'];
  //expandedElement!: Fattura | null;

  constructor(public fattureSrv: FattureService) {}

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

  ngAfterViewInit() {
    console.log("dopo caricamento")
  }

  cambiaPagina(currentIndex: number) {
    this.fattureSrv.getFatture(currentIndex).subscribe({
      next: (v) => {
        console.log(v.content);
        this.fatture = v.content;
      },
      error: (e) => console.error(e),
      complete: () => console.info('pagina fatture acquisita'),
    });
  }
}
