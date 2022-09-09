import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindFlightComponent } from './find-flight/find-flight.component';
import { FlighResultComponent } from './fligh-result/fligh-result.component';
import { PurchaseFlightComponent } from './purchase-flight/purchase-flight.component';
import { VacationComponent } from './vacation/vacation.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:FindFlightComponent},
  {path:'flightresult',component:FlighResultComponent},
  {path:'purchase',component:PurchaseFlightComponent},
  {path:'vacation',component:VacationComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
