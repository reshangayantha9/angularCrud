import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeModule} from "./home/home.module";
import {AddCustomerModule} from "./add-customer/add-customer.module";
import{EditCustomerModule} from "./edit-customer/edit-customer.module";
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import{Routes,RouterModule} from "@angular/router";
import {CustomersDataService} from "./services/customers-data.service";
import {AddCustomerComponent} from "./add-customer/add-customer/add-customer.component";
import {EditCustomerComponent} from "./edit-customer/edit-customer/edit-customer.component";
import {HomeComponent} from "./home/home/home.component";
const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'add-customer',component:AddCustomerComponent},
  {path:'edit-customer',component:EditCustomerComponent}
  ]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HomeModule,
    AddCustomerModule,
    EditCustomerModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CustomersDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
