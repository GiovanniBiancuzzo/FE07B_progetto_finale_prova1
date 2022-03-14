import { Component, ViewChild, OnInit } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogged = true;// cancellare dopo implementazione login
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onLogout() {
  //logout service
    this.accordion.closeAll()
    this.router.navigate(['/login']);
  }
}
