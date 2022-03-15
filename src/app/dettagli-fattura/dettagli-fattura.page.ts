import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Fattura } from '../models/fattura';

@Component({
  template: `
    <style>
      #stampa {
        max-width: 90%;
        display: flex;
        justify-content: space-evenly;
        margin: 30px auto;
        align-items: center;
        flex-direction: column;
      }
      #stampa>div {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
      }

      #fattura {
        max-width: 90%;
        display: flex;
        flex-direction: column;
        margin: auto;
      }
      header {
        text-align: center;
        flex-basis: 1;
      }
      main {
        display: flex;
        justify-content: space-around;
      }
    </style>

    <div id="stampa">
      <h2>Fattura n.{{fatturaId}} di Epic Education Srl</h2>
      <div>
        <button mat-raised-button color="accent" (click)="print()" ><mat-icon>print</mat-icon>Stampa</button>
        <button mat-raised-button color="accent" ><mat-icon>edit</mat-icon>Modifica</button><!-- da finire -->
        <button mat-raised-button color="accent" ><mat-icon>delete_forever</mat-icon>Elimina</button><!-- da finire -->
      </div>
    </div>

    <div id="fattura">
      <header>
        <img src="https://epicode.com/assets/logo.svg" alt="Logo Epicode" />
        <h2>Epic Education Srl</h2>
        <p>Indirizzo: Via dei Magazzini Generali 16, 00154</p>
      </header>
      <hr />
      <main>
        <app-card-fattura></app-card-fattura>
        <app-card-cliente></app-card-cliente>
      </main>
    </div>
  `
})
export class DettagliFatturaPage implements OnInit {

  fatturaId!: number;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
      this.router.params.subscribe({
      next: (v) => {
        console.log(v['id']);
        this.fatturaId = v['id'];
      },
      error: (e) => console.error(e),
      complete: () => console.info('id fattura acquisita'),
    });
  }

  print() {
    window.print();
  }
}
