import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersDataService {
  customers:Array<any>=[];
  addData( data: any ){
    this.customers.push(data)
  }
  deleteData(data:any){
    let index=this.customers.indexOf(data);
    this.customers.slice(0,1);
    console.log(this.customers);

  }
  constructor() { }
}
