import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './contatti.page.html',
  styleUrls: ['./contatti.page.scss']
})
export class ContattiPage implements OnInit {

  cliente = {
    nomeContatto: 'Giovanni',
    cognomeContatto: 'Biancuzzo',
    telefonoContatto: 3409047333,
    emailContatto: 'giovannibiancuzzo@protonmail.com',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
