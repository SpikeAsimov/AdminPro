import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import {APP_ROUTES} from './app.routes';

//Modulos
import { PagesModule } from './pages/pages.module';
import {FormsModule} from "@angular/forms";
//Components
import { AppComponent } from './app.component';
import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
//Services
import {SettingsService} from "./services/settings.service";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
