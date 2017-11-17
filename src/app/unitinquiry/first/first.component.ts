import { Component, OnInit, ViewEncapsulation,Input,Output,EventEmitter  } from '@angular/core';
import { Employee } from "../../model/users.model";
import { CustomerService } from "../../services/customer.service";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FirstComponent implements OnInit {
@Input() titleMessage:string;
@Output()
sendMyNameEventEmitter: EventEmitter<string>= new EventEmitter<string>();
private employeeObject:Employee;
 private addresult:any;

  constructor(private service:CustomerService) { }

  ngOnInit() {
  }

  sendMyName(event, byName){
    this.sendMyNameEventEmitter.emit(byName);
  }

  submitEmployee(){
    this.addEmployees();
  }

  addEmployees(){
    this.employeeObject=new Employee("Narender","12");
     this.service.addEmployees(JSON.stringify(this.employeeObject)).subscribe(data=>{
       this.addresult= data;       
     });
  }

}
