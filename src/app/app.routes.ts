import {RouterModule, Routes} from '@angular/router';

import {PagesComponent} from './pages/pages.component';

import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {ProgressComponent} from './pages/progress/progress.component';
import {GraficaUnoComponent} from './pages/grafica-uno/grafica-uno.component';
import {PagenotfoundComponent} from './pages/pagenotfound/pagenotfound.component';
import {RegisterComponent} from './login/register.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'progress', component: ProgressComponent},
      { path: 'graficaUno', component: GraficaUnoComponent},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: PagenotfoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true});
