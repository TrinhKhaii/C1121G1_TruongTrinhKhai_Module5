import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './templates-component/header/header.component';
import { FooterComponent } from './templates-component/footer/footer.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CustomerModule} from "./customer-component/customer.module";
import {TemplatesModule} from "./templates-component/templates.module";
import {ContractModule} from "./contract-component/contract.module";
import {ServiceModule} from "./service-component/service.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // NavBarComponent,
    // ServiceListComponent,
    // VillaCreateFormComponent,
    // CustomerListComponent,
    // CustomerCreateFormComponent,
    // CustomerEditFormComponent,
    // VillaEditFormComponent,
    // ContractListComponent,
    // ContractCreateFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    CustomerModule,
    TemplatesModule,
    ContractModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
