import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, NgModel } from '@angular/forms';
import { FlightsService } from '../service/flights.service';

@Component({
  selector: 'app-find-flight',
  templateUrl: './find-flight.component.html',
  styleUrls: ['./find-flight.component.css']

})
export class FindFlightComponent implements OnInit {

  constructor(private flightservice: FlightsService) { }

  ngOnInit(): void {
  }

  submitform(inputval:NgForm){
   this.flightservice.findFlight(inputval.value['depature'],inputval.value['arrival'])
  }

}
