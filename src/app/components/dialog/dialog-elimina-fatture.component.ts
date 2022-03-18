import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-elimina-fatture',
  template: `
    <h1 mat-dialog-title>Eliminazione fattura</h1>
    <div mat-dialog-content>
      Hai eliminato con successo la fattura!
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close [routerLink]="['/fatture']">Torna a fatture</button>
    </div>
  `,
  styles: [
  ]
})
export class DialogEliminaFattureComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DialogEliminaFattureComponent);
  }
}
