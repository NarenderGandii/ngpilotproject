import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'app/services/customer.service';
import { Users } from 'app/model/users.model';
import { isNumber } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CustomerService]
})
export class HomeComponent implements OnInit {
private searchCriteria:any;
private users: Array<Users>=[];

  constructor(private custService:CustomerService) { }

  ngOnInit() {
  }
  searchData(){
    // if(isNaN(+this.searchCriteria)){
    //   this.custService.getSearchData(this.searchCriteria,undefined).subscribe(
    //     data=>{
    //       this.users=data;
    //     }
    //   );      
    // }else{
    //   this.custService.getSearchData(undefined, this.searchCriteria).subscribe(
    //     data=>{
    //       this.users=data;
    //     }
    //   );      
    // }
  }
}
