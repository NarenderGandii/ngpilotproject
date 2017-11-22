import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseballComponent } from 'app/superbowl/baseball/baseball.component';
import { CricketComponent } from 'app/superbowl/cricket/cricket.component';
import { RugbyComponent } from 'app/superbowl/rugby/rugby.component';

const routes: Routes = [
  { path:'baseball',component: BaseballComponent },
  { path:'cricket',component:CricketComponent },
  { path:'rugby',component:RugbyComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperbowlRoutingModule { }
