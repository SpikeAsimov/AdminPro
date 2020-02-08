import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {ProgressComponent} from './pages/progress/progress.component';
import {GraficaUnoComponent} from './pages/grafica-uno/grafica-uno.component';
import {PagenotfoundComponent} from './pages/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'progress', component: ProgressComponent},
  { path: 'graficaUno', component: GraficaUnoComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true});
