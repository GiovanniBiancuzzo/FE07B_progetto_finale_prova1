import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module'; //material module con tutto material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HomePage } from './pages/home/home.page';//pagine
import { FatturePage } from './pages/fatture/fatture.page';
import { UtentiPage } from './pages/utenti/utenti.page';
import { ClientiPage } from './pages/clienti/clienti.page';
import { LoginPage } from './auth/login/login.page';
import { SignupPage } from './auth/signup/signup.page';
import { ContattiPage } from './pages/contatti/contatti.page';
import { DettagliFatturaPage } from './pages/dettagli-fattura/dettagli-fattura.page';
import { DettagliClientePage } from './pages/dettagli-cliente/dettagli-cliente.page';
import { CreaClientePage } from './pages/crea-cliente/crea-cliente.page';
import { CreaFatturaPage } from './pages/crea-fattura/crea-fattura.page';
import { ModificaClientePage } from './pages/modifica-cliente/modifica-cliente.page';

import { NavbarComponent } from './navbar/navbar.component';//componenti vari
import { DialogModificaFattureComponent } from './components/dialog/dialog-modifica-fatture.component';
import { DialogEliminaFattureComponent } from './components/dialog/dialog-elimina-fatture.component';
import { FattureDaClienteComponent } from './components/fatture-da-cliente.component';
import { CardFatturaComponent } from './components/cards/card-fattura.component';
import { CardClienteComponent } from './components/cards/card-cliente.component';
import { CardClienteSedeOperativaComponent } from './components/cards/card-cliente-sede-operativa.component';
import { CardClienteSedeLegaleComponent } from './components/cards/card-cliente-sede-legale.component';
import { CardContattiClienteComponent } from './components/cards/card-contatti-cliente.component';
import { CardContattiAziendaComponent } from './components/cards/card-contatti-azienda.component';
import { FooterComponent } from './footer/footer.component';
import { RuoliPipe } from './pipe/ruoli.pipe';





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
    CardClienteComponent,
    CreaClientePage,
    CreaFatturaPage,
    CardClienteSedeOperativaComponent,
    CardClienteSedeLegaleComponent,
    CardContattiClienteComponent,
    CardContattiAziendaComponent,
    ModificaClientePage,
    FooterComponent,
    RuoliPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
