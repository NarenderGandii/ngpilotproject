import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-vertical1',
  templateUrl: './vertical1.component.html',
  styleUrls: ['./vertical1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Vertical1Component implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

  deleteUser(index){
    this.employee.splice(index,1);
  }

}
