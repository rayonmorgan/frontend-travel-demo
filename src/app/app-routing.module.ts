import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindFlightComponent } from './find-flight/find-flight.component';
import { FlighResultComponent } from './fligh-result/fligh-result.component';

const routes: Routes = [
  {path:'',component:FindFlightComponent},
  {path:'flightresult',component:FlighResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
