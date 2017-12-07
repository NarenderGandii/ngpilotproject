import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-vertical1',
  templateUrl: './vertical1.component.html',
  styleUrls: ['./vertical1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Vertical1Component implements OnInit {
private total:number;
private employee=[
  {
"FirstName":"Narender",
"LastName":"Gandi",
"EmployeeId":"987",
"SSN":"124"
},
{
  "FirstName":"John",
  "LastName":"Smith",
  "EmployeeId":"435",
  "SSN":"454"
  }
]

  constructor() { 
    this.total= this.calculateTotal(this.employee,"SSN");
  }

  calculateTotal(obj,propertyname){
    return obj.reduce(function(a,b){
        return (+a) + (+b[propertyname]);
    },0)
  }
  ngOnInit() {
  }

  deleteUser(index){
    if(confirm("Are you sure you want to delete the user?"))
    {
      this.employee.splice(index,1);
    }
  }

}
