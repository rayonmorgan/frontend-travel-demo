import { Component, OnInit } from '@angular/core';
import { FlightsService } from './service/flights.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //Injet Flight service in controller to be used throughout Component
  constructor(private flightservice:FlightsService)
  {

  }

  title = 'frontend-travel-demo';

  ngOnInit(): void {
   //  this.flightservice.getFlight();
  }
}
