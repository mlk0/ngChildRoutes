import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

   
 
  selectedFlightId: number;
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {

     this.activatedRoute.params.subscribe(
       p=>
      this.selectedFlightId = 
      +p["id"]
    )  
  }

}
