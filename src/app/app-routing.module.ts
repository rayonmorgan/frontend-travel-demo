import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindFlightComponent } from './find-flight/find-flight.component';
import { FlighResultComponent } from './fligh-result/fligh-result.component';
import { PurchaseFlightComponent } from './purchase-flight/purchase-flight.component';

const routes: Routes = [
  {path:'',component:FindFlightComponent},
  {path:'flightresult',component:FlighResultComponent},
  {path:'purchase',component:PurchaseFlightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
