import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SettingsService,
  SidebarService,
  SharedService
} from "./services.index";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[SettingsService, SidebarService, SharedService]
})
export class ServicesModule { }
