import { RouterModule, Routes } from '@angular/router';

//Componentes
import {PagesComponent} from '../pages/pages.component';
import {DashboardComponent} from '../pages/dashboard/dashboard.component';
import {ProgressComponent} from '../pages/progress/progress.component';
import {GraficaUnoComponent} from '../pages/grafica-uno/grafica-uno.component';


const pagesRoutes: Routes = [
		{
			path: '',
			component: PagesComponent,
			children: [
				{ path: 'dashboard', component: DashboardComponent },
				{ path: 'progress', component: ProgressComponent },
	    	  	{ path: 'graficaUno', component: GraficaUnoComponent},
		      	{ path: '', redirectTo: '/dashboard', pathMatch: 'full'}

			]
		}
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );