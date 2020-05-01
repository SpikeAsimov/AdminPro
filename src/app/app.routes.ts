import {RouterModule, Routes} from '@angular/router';

//Components
import {RegisterComponent} from './login/register.component';
import {LoginComponent} from './login/login.component';
import {PagenotfoundComponent} from './pages/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
      { path: 'register', component: RegisterComponent},
      { path: 'login', component: LoginComponent},
      { path: '**', component: PagenotfoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true});
