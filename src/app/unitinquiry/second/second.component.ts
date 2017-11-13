import { Component, OnInit, ViewEncapsulation,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SecondComponent implements OnInit {
  @Input() firstCompValue;
  @Output()
  secondValueEmitter:EventEmitter<string>= new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendMySecondValue($event,value){
    this.secondValueEmitter.emit(value);
  }

}
