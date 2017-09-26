import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customers; 
  constructor() { 
    this.customers = new UnitedCustomers("Narender","Gandi");
  }
}

class UnitedCustomers{
 public FirstName:string;
 public LastName:string;  
  constructor(firstName:string,lastName:string){
      this.FirstName=firstName;
      this.LastName = lastName;
  }
}

