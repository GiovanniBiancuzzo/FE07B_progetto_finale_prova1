import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  form!: NgForm;


  hide = true;
  //loginForm!: FormControl;
  usernameVal = new FormControl('', [Validators.required]);
  passwordVal = new FormControl('', [Validators.required]);
  loginForm = new FormGroup ({
    username: new FormControl(''),
    password: new FormControl(''),

  })
  submit = new FormControl('', [Validators.required])
  constructor(private router: Router, private authSrv: AuthService) { }

  ngOnInit(): void {}

  onLogin(form: any) {
    console.log(form.value);
    this.authSrv.login(form.value);
    this.router.navigate(['/fatture'])
  }
}
