import { Component } from '@angular/core';
import {CustomersDataService} from "../../services/customers-data.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})

export class AddCustomerComponent {
  form:any;
constructor(private customerData:CustomersDataService) {
  this.form=new FormGroup({
    cusid:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    tp:new FormControl('',Validators.required)
  });
}
  get formAltaControls(): any {
    return this.form['controls'];
  }
onSubmit(){
  let data:any={
    id:this.form.value.cusid,
    name:this.form.value.name,
    tp:this.form.value.tp
  }
  this.customerData.addData(data);
  console.log(this.customerData.customers)
}
}
