import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperbowlRoutingModule } from './superbowl-routing.module';
import { RugbyComponent } from './rugby/rugby.component';
import { CricketComponent } from './cricket/cricket.component';
import { BaseballComponent } from './baseball/baseball.component';

@NgModule({
  imports: [
    CommonModule,
    SuperbowlRoutingModule
  ],
  declarations: [RugbyComponent, CricketComponent, BaseballComponent]
})
export class SuperbowlModule { }
