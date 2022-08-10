import { Component, OnInit } from '@angular/core';
import { ISearchFlight } from '../Model/flight.model';
import {FlightsService} from '../service/flights.service';

@Component({
  selector: 'app-fligh-result',
  templateUrl: './fligh-result.component.html',
  styleUrls: ['./fligh-result.component.css']
})
export class FlighResultComponent implements OnInit {
  //holds array of Flight type
  //flightList:{flightNumber:number;airline:string;fromPort:string;toPort:string;price:number,departTime:string,arriveTime:string}[] = [];
  flightList :ISearchFlight[] = [];


  constructor(private flightservice:FlightsService) { }

  ngOnInit(): void {
 /*    this.flightList.push({
      flightNumber:23,
      airline:"American Airline",
      fromPort:"JFK",
      toPort:"NMI",
      price:4.3,
      departTime: "1:00 AM",
      arriveTime:"3:30 PM"
    }); */
    this.flightservice.findFlight().subscribe(data=>
      this.flightList = data
    );

    console.log(this.flightList);
  }

    onChoseFlight(event:Event,flight:any){
   
  }

}
