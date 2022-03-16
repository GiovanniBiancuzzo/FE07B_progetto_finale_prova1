import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserRole } from 'src/app/models/user-role';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  hide = true;
  isLoading = false;
  isLoggedIn = false;
  user!: User;

  //roles!:[{ id: number; roleName: string }];

  // hide = true;
  // emailVal = new FormControl('', [Validators.required]);
  // nomeVal = new FormControl('', [Validators.required]);
  // passwordVal = new FormControl('', [Validators.required]);
  // rolesVal = new FormControl('', [Validators.required]);

  // loginForm = new FormGroup ({
  //   email: new FormControl(''),
  //   nome: new FormControl(''),
  //   cognome: new FormControl(''),
  //   password: new FormControl(''),
  //   roles: new FormControl(''),
  // })


  constructor(private router: Router, private authSrv: AuthService) { }

  ngOnInit(): void {}



  async onSignup(form: NgForm) {
    console.log(form.value);
    this.user.username = form.value.nome;
    this.user.email = form.value.email;
    //this.user.accessToken = form.value.password;
    this.user.roles[0].roleName = form.value.roles ;
    try {
      await this.authSrv.signup(this.user).toPromise();
      this.router.navigate(['/login']);
      this.isLoading = false;
    } catch (error) {
      console.error(error);
      form.reset();
      this.isLoading = false;
    }  }
}
