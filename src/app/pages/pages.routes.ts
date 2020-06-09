import { RouterModule, Routes } from '@angular/router';

//Componentes
import {PagesComponent} from '../pages/pages.component';
import {DashboardComponent} from '../pages/dashboard/dashboard.component';
import {ProgressComponent} from '../pages/progress/progress.component';
import {GraficaUnoComponent} from '../pages/grafica-uno/grafica-uno.component';
import {AccountSettingsComponent} from "./account-settings/account-settings.component";
import {PromesasComponent} from "./promesas/promesas.component";
import {RxjsComponent} from "./rxjs/rxjs.component";


const pagesRoutes: Routes = [
		{
			path: '',
			component: PagesComponent,
			children: [
				{ path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
				{ path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
        { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del tema' }  },
        { path: 'graficaUno', component: GraficaUnoComponent, data: { titulo: 'Gráficas' } },
        { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
        { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full'}

			]
		}
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
