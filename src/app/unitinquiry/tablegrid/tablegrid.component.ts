import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Users } from '../../model/users.model';
import { UrlSerializer } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-tablegrid',
  templateUrl: './tablegrid.component.html',
  styleUrls: ['./tablegrid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TablegridComponent implements OnInit {

private usrs: Array<Users>=[];

  constructor() {
    this.usrs.push(
      new Users(
        "1","Narender","narendergandi","narendergandi@gmail.com","1235","www.google.com"
        )
      );
      this.usrs.push(
        new Users(
          "2","John","johnsmith","johnsmith@gmail.com","89237","www.news.google.com"
          )
        );
   }
   selectedUser(selectedUser:Users){
      console.log(selectedUser);
   }
  ngOnInit() {

  }

}
