import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  user = localStorage.getItem('user');
  constructor() { }

  ngOnInit(): void {
  }

}
