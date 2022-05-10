import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './templates-component/header/header.component';
import { FooterComponent } from './templates-component/footer/footer.component';
import { NavBarComponent } from './templates-component/nav-bar/nav-bar.component';
import { ServiceListComponent } from './service-component/service-list/service-list.component';
import { VillaCreateFormComponent } from './service-component/villa-create-form/villa-create-form.component';
import { CustomerListComponent } from './customer-component/customer-list/customer-list.component';
import { CustomerCreateFormComponent } from './customer-component/customer-create-form/customer-create-form.component';
import { CustomerEditFormComponent } from './customer-component/customer-edit-form/customer-edit-form.component';
import { VillaEditFormComponent } from './service-component/villa-edit-form/villa-edit-form.component';
import { ContractListComponent } from './contract-component/contract-list/contract-list.component';
import { ContractCreateFormComponent } from './contract-component/contract-create-form/contract-create-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    ServiceListComponent,
    VillaCreateFormComponent,
    CustomerListComponent,
    CustomerCreateFormComponent,
    CustomerEditFormComponent,
    VillaEditFormComponent,
    ContractListComponent,
    ContractCreateFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
