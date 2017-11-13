import { Component, OnInit, ViewEncapsulation,Input } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ThirdComponent implements OnInit {
@Input() result:string;
  constructor() { }

  ngOnInit() {
  }

}
