import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  flightResults(){
    this.router.navigate(
      [
        '/flights', { 
                      outlets : { 
                        'master' : ['list'], 
                        'details' : ['itinerary'] 
                      }
                    }])

  }
}
