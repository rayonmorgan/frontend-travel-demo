import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css']
})
export class VacationComponent implements OnInit {
  week_destination:string;

  constructor() {
    this.week_destination = 'Brazil';
   }

  ngOnInit(): void {
  }

}
