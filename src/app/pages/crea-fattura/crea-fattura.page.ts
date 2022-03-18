import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'crea-fattura-page',
  templateUrl: './crea-fattura.page.html',
  styleUrls: ['./crea-fattura.page.scss']
})
export class CreaFatturaPage implements OnInit {

  @Input() clienteId!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
