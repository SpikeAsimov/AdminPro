import { NgModule } from '@angular/core';

//Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaUnoComponent } from './grafica-uno/grafica-uno.component';
//Modulos
import { SharedModule } from '../shared/shared.module';
import {FormsModule} from "@angular/forms";
//Rutas
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
	declarations: [
		PagesComponent,
	    DashboardComponent,
	    ProgressComponent,
	    GraficaUnoComponent
	],
	exports: [
		DashboardComponent,
	    ProgressComponent,
	    GraficaUnoComponent
	],
	imports: [
		SharedModule,
		PAGES_ROUTES,
    FormsModule
	]
})


export class PagesModule { }
