import { Injectable } from '@angular/core';
import { Customer } from '../model/customer.model';
import {  Users } from '../model/users.model';
import {Observable} from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class CustomerService{

    constructor(private http:Http){

    }
    customers:Customer[]=[];

    users:Users[];
    getAllCustomers(): Customer[]{
            this.customers.push(new Customer("John","Smith"));
            this.customers.push(new Customer("Narender","Gandi"));
            return this.customers;
    }
  
    getAllUsers():Observable<Users[]>{
        return this.http.get("http://localhost/webapi46/api/user")
        .map((res:Response)=>{
            return res.json()  
        })
        .catch((error:any) => Observable.throw(error || 'Server error'));
    }   
}

