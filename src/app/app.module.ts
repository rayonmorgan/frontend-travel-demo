import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { ContainerComponent } from './container/container.component';
import { FindFlightComponent } from './find-flight/find-flight.component';
import { FormsModule } from '@angular/forms';
import { FlighResultComponent } from './fligh-result/fligh-result.component';
import { PurchaseFlightComponent } from './purchase-flight/purchase-flight.component';
import { VacationComponent } from './vacation/vacation.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MainheaderComponent,
    ContainerComponent,
    FindFlightComponent,
    FlighResultComponent,
    PurchaseFlightComponent,
    VacationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
