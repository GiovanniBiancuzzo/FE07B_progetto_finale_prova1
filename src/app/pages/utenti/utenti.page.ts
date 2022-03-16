import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UtentiService } from './utenti.service';

@Component({
  templateUrl: './utenti.page.html',
  styleUrls: ['./utenti.page.scss']
})
export class UtentiPage implements OnInit {

  utenti!: User[];
  pagina: number = 0;
  currentIndex: number = this.pagina;
  displayedColumns = ['id', 'nomeCognome', 'username', 'email', 'roles.roleName'];

  data = new Date(); //gestione data in fondo alla pagina
  ora = `${this.data.getHours()}:${this.data.getMinutes()}:${this.data.getSeconds()}`;
  giorno = `${this.data.getDate()}/${this.data.getMonth()}/${this.data.getFullYear()}`;

  constructor(private utentiSrv: UtentiService) {

  }

  ngOnInit(): void {
    this.pagina;
    this.utentiSrv.getUtenti(this.pagina).subscribe({
      next: (v) => {
        console.log(v.content);
        this.utenti = v.content;
      },
      error: (e) => console.error(e),
      complete: () => console.info('pagina utenti acquisita'),
    });
  }

  ngAfterViewChecked() {
    console.log('dopo caricamento');
  }

  avanzaPagina() {
    //pagina successiva di fatture
    this.currentIndex++;
    console.log(this.currentIndex);
    this.utentiSrv.getUtenti(this.currentIndex).subscribe({
      next: (v) => {
        console.log(v.content);
        this.utenti = v.content;
      },
      error: (e) => console.error(e),
      complete: () => console.info('pagina fatture acquisita'),
    });
  }

  indietroPagina() {
    //pagina precedente di fatture
    this.currentIndex--;
    console.log(this.currentIndex);
    this.utentiSrv.getUtenti(this.currentIndex).subscribe({
      next: (v) => {
        console.log(v.content);
        this.utenti = v.content;
      },
      error: (e) => console.error(e),
      complete: () => console.info('pagina fatture acquisita'),
    });
  }
}
