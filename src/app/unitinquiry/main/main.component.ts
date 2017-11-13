import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  private titleMessage:string="Hello, I am from the Main";
  private firstCompValue=0;
  private secondValue=0;
  private result=0;
  constructor() { }

  ngOnInit() {
  }
  sendMyNameFromParent(name){
    this.firstCompValue=name;
    this.result=((+this.secondValue) + (+this.firstCompValue)); 
  }

  sendMySecondValue(value){
    this.secondValue=value;
    this.result=((+value) + (+this.firstCompValue)); 
  }
}
