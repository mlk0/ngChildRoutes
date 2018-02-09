import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  flights = [
    {
      "id": 123,
      "from": "YYZ",
      "to": "SKP"

    },
    {
      "id": 456,
      "from": "VIE",
      "to": "SKP"

    },
    {
      "id": 789,
      "from": "YYZ",
      "to": "JFK"
    },
    {
      "id": 101,
      "from": "FRA",
      "to": "YYZ"
    }
  ]
}
