import { Component, OnInit, ViewEncapsulation,Input,Output,EventEmitter  } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  sendMyName(event, byName){
    this.sendMyNameEventEmitter.emit(byName);
  }

}
