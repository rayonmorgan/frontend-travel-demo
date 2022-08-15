import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ISearchFlight} from '../Model/flight.model'; //import interface from file 

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  searchFlightUrl:String = 'http://localhost:8080/api/flight';
  depart:string;
  arrive:string;
  selectFlight:ISearchFlight;
   
  

  constructor(private httpclient: HttpClient) { 
    this.depart = '';
    this.arrive = '';
    this.selectFlight = {
      flightNumber: 0,
      airline:'',
      fromPort: '',
      toPort:'',
      price:0,
      departTime:'',
      arriveTime:''
      
    }     
  }

  setSearchFlightDetails(depart:string,arrive:string):void{
    this.depart = depart;
    this.arrive = arrive;
  }

  /**
   * Description: get departure port and arrival port, then call endpoint to return flights details
   * @param depart 
   * @param arrive 
   */
  findFlight():Observable<ISearchFlight[]>{
    //console.log(depart + ' ' + arrive);
    //const httpheaders:HttpHeaders = new HttpHeaders({'Authorization':'Basic am9objpwYXNzd29yZA=='});
    const credential = 'john:password';
    console.log(btoa(credential));
    const httpheaders = {'Authorization':'Basic ' + btoa(credential),'Content-Type':'application/json'};

    //call endpoint and return a strongly typed dataset of type ISearchFlight
     return this.httpclient.post<ISearchFlight[]>('http://localhost:8080/api/flight',{portFrom:this.depart,portTo:this.arrive},{headers:httpheaders});
 
  }

  //update the selected flight
  setSelectedFlight(isearchFlight:ISearchFlight) 
  {
      this.selectFlight = isearchFlight;    
  }

  //get selected slight
  /**
   * @return - return current user selected flight
   */
  getSeletedFlight():ISearchFlight
  {     
    return this.selectFlight;
  }



}


