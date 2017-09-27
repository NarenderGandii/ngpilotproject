import { Injectable } from '@angular/core';
import { Customer } from '../model/customer.model';

@Injectable()
export class CustomerService{
    customers:Customer[]=[];
    getAllCustomers(): Customer[]{
            this.customers.push(new Customer("John","Smith"));
            this.customers.push(new Customer("Narender","Narender"));
            return this.customers;
    }

}

