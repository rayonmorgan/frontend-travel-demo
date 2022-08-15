import { Component, OnInit } from '@angular/core';
import {NgForm,NgModel,FormGroup} from '@angular/forms';
import { ISearchFlight } from '../Model/flight.model';
import { FlightsService } from '../service/flights.service';

@Component({
  selector: 'app-purchase-flight',
  templateUrl: './purchase-flight.component.html',
  styleUrls: ['./purchase-flight.component.css']
})
export class PurchaseFlightComponent implements OnInit {
  selectFlight:ISearchFlight;
  totalprice:number;
  taxprice:number;
  tax:number = 10.15;

  constructor(private flightservice: FlightsService) {
    this.selectFlight = {
      flightNumber: 0,
      airline:'',
      fromPort: '',
      toPort:'',
      price:0,
      departTime:'',
      arriveTime:''
      
    }

    this.totalprice = 0.0;
    this.taxprice = 0.0;
   }

  ngOnInit(): void {
   this.selectFlight = this.flightservice.getSeletedFlight();
   this.taxprice = (this.selectFlight.price * this.tax)/100;
   this.totalprice = this.taxprice + this.selectFlight.price;
  }

  makePurchase(event:Event,form: NgForm){
    console.log("purchase made");   
  }

}
