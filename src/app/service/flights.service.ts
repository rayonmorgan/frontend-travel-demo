import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private httpclient: HttpClient) { }

  getFlight()
  {
    alert('hello service');
  }


}
