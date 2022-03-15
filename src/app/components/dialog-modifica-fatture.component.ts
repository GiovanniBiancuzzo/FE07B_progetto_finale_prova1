import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FattureService } from '../pages/fatture/fatture.service';

@Component({
  selector: 'app-dialog-modifica-fatture',
  template: `
    <h1 mat-dialog-title>Modifica fattura</h1>
    <div mat-dialog-content>
      Hai modificato con successo la fattura!
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close [routerLink]="['/fatture']">Torna a fatture</button>
    </div>
  `,
  styles: [
  ]
})
export class DialogModificaFattureComponent implements OnInit {

  constructor(public dialog: MatDialog, private fattureSrv: FattureService) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(DialogModificaFattureComponent);
  }

}
