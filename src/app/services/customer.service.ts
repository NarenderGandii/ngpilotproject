import { Injectable } from '@angular/core';
import { Customer } from '../model/customer.model';
import {  Users } from '../model/users.model';
import {Observable} from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService{

    constructor(private http:Http){

    }
    customers:Customer[]=[];

 
    getAllCustomers(): Customer[]{
            this.customers.push(new Customer("John","Smith"));
            this.customers.push(new Customer("Narender","Gandi"));
            return this.customers;
    }
 
    getAllUsers():Observable<Users[]>{ //returns an Observable
        return this.http.get("http://localhost/webapi46/api/user")
        .map((res:Response)=>{ //map is an observable operator which calls a function for each item on its input stream and pushes the result of the function to it’s output stream. In this case each input item is a Response object.
            return res.json().map(item=>{
                    return new Users(item.Id,item.Name,item.UserName,item.Email,item.Phone,item.Website); //We convert the raw data returned from the API into an instance of User
                }
            );
        })
    }
}

