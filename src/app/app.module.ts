import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainheaderComponent } from './mainheader/mainheader.component';


@NgModule({
  declarations: [
    AppComponent,
    MainheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
