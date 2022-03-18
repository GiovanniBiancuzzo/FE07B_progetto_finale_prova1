import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FattureService } from '../fatture/fatture.service';

@Component({
  template: `
    <style>
      main {
        max-width: 90%;
        margin: 30px auto;
        display: flex;
        flex-direction: column;
      }
      #header {
        width: 100%;
        display: flex;
        margin: 20px auto;
        align-items: center;
        flex-direction: column;
      }
      #fattura > div:first-child {
        text-align: center;
        flex-basis: 1;
      }
      section {
        display: flex;
        justify-content: space-around;
      }
      #cliente {
        text-align: end;
      }
    </style>

    <main>
      <!-- cambia nome body -->
      <div id="header">
        <h2>Fattura n.{{ fatturaId }} di Epic Education Srl</h2>
        <div>
          <button mat-raised-button color="accent" (click)="print()">
            <mat-icon>print</mat-icon> Stampa
          </button>
          <button mat-raised-button color="accent" >
            <mat-icon>edit</mat-icon> Modifica stato </button
          ><!-- da finire -->
          <button mat-raised-button color="accent" (click)="onElimina()">
            <mat-icon>delete_forever</mat-icon> Elimina</button
          ><!-- da finire -->
        </div>
      </div>

      <div id="fattura">
        <div>
          <img src="https://epicode.com/assets/logo.svg" alt="Logo Epicode" />
          <h2>Epic Education Srl</h2>
          <p>Indirizzo: Via dei Magazzini Generali 16, 00154</p>
        </div>
        <hr />
        <section>
          <app-card-fattura></app-card-fattura>
          <div id="cliente">
            <app-card-cliente></app-card-cliente>
            <div id="contatti">
              <app-card-contatti-azienda></app-card-contatti-azienda>
              <app-card-cliente-sede-legale></app-card-cliente-sede-legale>
            </div>
          </div>
        </section>
      </div>
    </main>
  `,
})
export class DettagliFatturaPage implements OnInit {
  fatturaId!: number;

  constructor(private router: ActivatedRoute, private route: Router, private fattureSrv: FattureService) {}

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

  onElimina() {
    this.fattureSrv.cancellaFattura(this.fatturaId).subscribe({
      next: (v) => this.route.navigate(['/fatture']),
      error: (e) => console.error(e),
      complete: () => console.info('fattura eliminata'),
    })
  }
}
