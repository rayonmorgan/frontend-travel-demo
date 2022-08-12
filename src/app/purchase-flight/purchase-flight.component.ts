import { Component, OnInit } from '@angular/core';
import {NgForm,NgModel,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-purchase-flight',
  templateUrl: './purchase-flight.component.html',
  styleUrls: ['./purchase-flight.component.css']
})
export class PurchaseFlightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  makePurchase(event:Event,form: NgForm){
    console.log("purchase made");
  }

}
