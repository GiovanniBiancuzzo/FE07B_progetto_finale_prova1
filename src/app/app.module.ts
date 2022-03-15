import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { NavbarComponent } from './navbar/navbar.component';
import { HomePage } from './pages/home/home.page';
import { FatturePage } from './pages/fatture/fatture.page';
import { UtentiPage } from './pages/utenti/utenti.page';
import { ClientiPage } from './pages/clienti/clienti.page';
import { LoginPage } from './auth/login/login.page';
import { SignupPage } from './auth/signup/signup.page';
import { ContattiPage } from './pages/contatti/contatti.page';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';//material module con tutto material

import { DialogModificaFattureComponent } from './components/dialog-modifica-fatture.component';
import { DialogEliminaFattureComponent } from './components/dialog-elimina-fatture.component';
import { DettagliFatturaPage } from './dettagli-fattura/dettagli-fattura.page';
import { DettagliClientePage } from './dettagli-cliente/dettagli-cliente.page';
import { AuthGuard } from './auth/auth.guard';
import { FattureDaClienteComponent } from './components/fatture-da-cliente.component';
import { CardFatturaComponent } from './components/card-fattura.component';
import { CardClienteComponent } from './components/card-cliente.component';




const routes: Routes = [
  {
    path:'',
    component: HomePage,
    canActivate: [AuthGuard]
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
    canActivate: [AuthGuard]
  },
  {
    path:'fatture',
    component: FatturePage,
    canActivate: [AuthGuard]
  },
  {
    path:'fatture/:id',
    component: DettagliFatturaPage,
    canActivate: [AuthGuard]
  },
  {
    path:'clienti',
    component: ClientiPage,
    canActivate: [AuthGuard]
  },
  {
    path:'clienti/:id',
    component: DettagliClientePage,
    canActivate: [AuthGuard]
  },
  {
    path:'contatti',
    component: ContattiPage,
    canActivate: [AuthGuard]
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
    ContattiPage,
    DialogModificaFattureComponent,
    DialogEliminaFattureComponent,
    DettagliFatturaPage,
    DettagliClientePage,
    FattureDaClienteComponent,
    CardFatturaComponent,
    CardClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
