import { NgModule } from '@angular/core';

//Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaUnoComponent } from './grafica-uno/grafica-uno.component';
import {IncrementadorComponent} from "../components/incrementador/incrementador.component";
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
//Modulos
import { SharedModule } from '../shared/shared.module';
import {FormsModule} from "@angular/forms";
import {ChartsModule} from "ng2-charts";
//Rutas
import { PAGES_ROUTES } from './pages.routes';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
	declarations: [
		PagesComponent,
	    DashboardComponent,
	    ProgressComponent,
	    GraficaUnoComponent,
      IncrementadorComponent,
      GraficaDonaComponent,
      AccountSettingsComponent,
      PromesasComponent,
      RxjsComponent
	],
	exports: [
		DashboardComponent,
	    ProgressComponent,
	    GraficaUnoComponent
	],
	imports: [
		SharedModule,
		PAGES_ROUTES,
    FormsModule,
    ChartsModule
	]
})


export class PagesModule { }
