import { Component, ViewChild, OnInit } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogged = true;// cancellare dopo implementazione login
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  user = localStorage.getItem('user');
  constructor(private router:Router, private authSrv: AuthService) { }

  ngOnInit(): void {
  }

  onLogout() {
  //logout service
    this.accordion.closeAll()
    this.authSrv.logout();
  }
}
