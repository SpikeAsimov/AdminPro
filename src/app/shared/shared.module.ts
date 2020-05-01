import { NgModule } from '@angular/core';

//Components
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';


@NgModule({
	declarations: [
		HeaderComponent,
		SidebarComponent,
		BreadcrumbsComponent
	],
	//Si necesito usar estos component fuera del modulo
	exports: [
		HeaderComponent,
		SidebarComponent,
		BreadcrumbsComponent	
	]
})

export class SharedModule { }

