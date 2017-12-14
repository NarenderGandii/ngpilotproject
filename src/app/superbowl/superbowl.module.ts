import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuperbowlRoutingModule } from './superbowl-routing.module';
import { RugbyComponent } from './rugby/rugby.component';
import { CricketComponent } from './cricket/cricket.component';
import { BaseballComponent } from './baseball/baseball.component';

@NgModule({
  imports: [
    CommonModule,
    SuperbowlRoutingModule,
    FormsModule
  ],
  declarations: [RugbyComponent, CricketComponent, BaseballComponent]
})
export class SuperbowlModule { }
