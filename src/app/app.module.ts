import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NavbarComponent } from './navbar/navbar.component';
import { HomePage } from './pages/home/home.page';
import { FatturePage } from './pages/fatture/fatture.page';
import { UtentiPage } from './pages/utenti/utenti.page';
import { ClientiPage } from './pages/clienti/clienti.page';
import { LoginPage } from './auth/login/login.page';
import { SignupPage } from './auth/signup/signup.page';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ContattiPage } from './pages/contatti/contatti.page';//tutto m



const routes: Routes = [
  {
    path:'',
    component: HomePage,
  },
  {
    path:'login',
    component: LoginPage,
  },
  {
    path:'signup',
    component: SignupPage,
  },
  {
    path:'utenti',
    component: UtentiPage,
  },
  {
    path:'fatture',
    component: FatturePage,
  },
  {
    path:'clienti',
    component: ClientiPage,
  },
  {
    path:'contatti',
    component: ContattiPage,
  },
  {
    path:'**',
    redirectTo: '/'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePage,
    FatturePage,
    UtentiPage,
    ClientiPage,
    LoginPage,
    SignupPage,
    ContattiPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
