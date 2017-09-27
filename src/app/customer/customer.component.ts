import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService]
})
export class CustomerComponent {
  customers:Customer[]; 
  constructor(private customerService:CustomerService) { 
    this.customers = customerService.getAllCustomers();
    console.log(this.customers);
  }
}
