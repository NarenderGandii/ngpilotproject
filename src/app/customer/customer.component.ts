import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../model/customer.model';
import {  Users } from '../model/users.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService]
})
export class CustomerComponent {
  customers:Customer[]; 
  users: Users[];
  constructor(private customerService:CustomerService) { 
    this.customers = customerService.getAllCustomers();
    // customerService.getAllUsers()
    // .subscribe(
    //   data => this.users = data
    // )
    // console.log(this.users);
  }
}
