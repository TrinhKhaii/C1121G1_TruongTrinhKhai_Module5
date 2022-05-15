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
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    CustomerModule,
    TemplatesModule,
    ContractModule,
    ServiceModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
