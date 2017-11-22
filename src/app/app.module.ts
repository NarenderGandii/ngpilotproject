import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CustomerService } from './services/customer.service';
import { BackgroundGreenDirective } from './directives/background-green.directive';
import { FirstComponent } from './unitinquiry/first/first.component';
import { SecondComponent } from './unitinquiry/Second/Second.component';
import { ThirdComponent } from './unitinquiry/Third/Third.component';
import { MainComponent } from './unitinquiry/Main/main.component';
import { TablegridComponent } from './unitinquiry/tablegrid/tablegrid.component';
import { ContactComponent } from './contact/contact.component';
import { Vertical1Component } from 'app/contact/vertical1/vertical1.component';
import { Vertical2Component } from 'app/contact/vertical2/vertical2.component';
import { Vertical3Component } from 'app/contact/vertical3/vertical3.component';
import { SuperbowlComponent } from './superbowl/superbowl.component';
import { SuperbowlModule } from 'app/superbowl/superbowl.module';

const appRoutes: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'main',      component: MainComponent },
  { path: 'home',      component: HomeComponent },
  {path:'contact', component:  ContactComponent, children:[
     { path:'vertical1',component: Vertical1Component },
     { path:'vertical2', component: Vertical2Component },
     { path:'vertical3', component: Vertical3Component }
  ] },
  {path:'superbowl',component:SuperbowlComponent },
  { path: '', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent, 
    AboutusComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BackgroundGreenDirective,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    MainComponent,
    TablegridComponent,
    Vertical1Component,
    Vertical2Component,
    Vertical3Component,
    ContactComponent,
    SuperbowlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    NgbModule.forRoot(),
    SuperbowlModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

