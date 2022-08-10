import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightsService } from '../service/flights.service';

@Component({
  selector: 'app-find-flight',
  templateUrl: './find-flight.component.html',
  styleUrls: ['./find-flight.component.css']

})
export class FindFlightComponent implements OnInit {

  constructor(private flightservice: FlightsService,private rounter: Router) { }

  ngOnInit(): void {
  }

  submitform(inputval:NgForm){
/*    this.flightservice.findFlight(inputval.value['depature'],inputval.value['arrival'])
   .subscribe(data=> console.log(data),  error => console.log(error)); */
     //set departure and arrival value in service
     this.flightservice.setSearchFlightDetails(inputval.value['depature'],inputval.value['arrival']);
      //route to the display flight result page

      console.log('Form Submitted:- Injected service called.');

      //route site to result page/component
      this.rounter.navigate(['flightresult']);

    }

}
