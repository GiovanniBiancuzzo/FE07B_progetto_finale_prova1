import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { LoginPage } from './auth/login/login.page';
import { SignupPage } from './auth/signup/signup.page';
import { ClientiPage } from './pages/clienti/clienti.page';
import { ContattiPage } from './pages/contatti/contatti.page';
import { CreaClientePage } from './pages/crea-cliente/crea-cliente.page';
import { CreaFatturaPage } from './pages/crea-fattura/crea-fattura.page';
import { DettagliClientePage } from './pages/dettagli-cliente/dettagli-cliente.page';
import { DettagliFatturaPage } from './pages/dettagli-fattura/dettagli-fattura.page';
import { FatturePage } from './pages/fatture/fatture.page';
import { HomePage } from './pages/home/home.page';
import { ModificaClientePage } from './pages/modifica-cliente/modifica-cliente.page';
import { UtentiPage } from './pages/utenti/utenti.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'signup',
    component: SignupPage,
  },
  {
    path: 'utenti',
    component: UtentiPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'fatture',
    component: FatturePage,
    canActivate: [AuthGuard],
  },
  {
    path: 'fatture/crea',
    component: CreaFatturaPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'fatture/:id',
    component: DettagliFatturaPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'clienti',
    component: ClientiPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'clienti/crea',
    component: CreaClientePage,
    canActivate: [AuthGuard],
  },
  {
    path: 'clienti/modifica/:id',
    component: ModificaClientePage,
    canActivate: [AuthGuard],
  },

  {
    path: 'clienti/:id',
    component: DettagliClientePage,
    canActivate: [AuthGuard],
  },
  {
    path: 'contatti',
    component: ContattiPage,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
