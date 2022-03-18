import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  hide = true;
  usernameVal = new FormControl('', [Validators.required]);
  passwordVal = new FormControl('', [Validators.required]);
  form = new FormGroup ({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private router: Router, private authSrv: AuthService) { }

  ngOnInit(): void {}

  onLogin(form: any) {
    console.log(form.value);
    this.authSrv.login(form.value);
    this.router.navigate(['/'])
  }
}
