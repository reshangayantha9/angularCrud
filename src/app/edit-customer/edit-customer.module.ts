import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    EditCustomerComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports:[EditCustomerComponent]
})
export class EditCustomerModule { }
