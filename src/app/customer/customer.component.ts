import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../model/customer.model';
import {  Users } from '../model/users.model';

import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService]
})

export class CustomerComponent  {
  customers:Customer[]; 
  private users:Array<Users>=[];
  constructor(private customerService:CustomerService) { 
    this.customers = customerService.getAllCustomers();
    this.getAllUserData();
       console.log(this.users);
  }

  getAllUserData(){
    this.customerService.getAllUsers()
    .subscribe(
      results => {
        results.forEach(element => {
          this.users.push(element);
      });
      }
    )
  }
}
