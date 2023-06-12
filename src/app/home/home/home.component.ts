import { Component } from '@angular/core';
import {CustomersDataService} from "../../services/customers-data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  customers:Array<any>;
  delete:CustomersDataService;
  constructor(private customerDate:CustomersDataService) {
    this.customers=customerDate.customers;
    this.delete=customerDate;
  }


}
