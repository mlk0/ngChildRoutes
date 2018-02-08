import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-activity',
  templateUrl: './customer-activity.component.html',
  styleUrls: ['./customer-activity.component.css']
})
export class CustomerActivityComponent implements OnInit {
  selectedCustomerId: number;

  

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe(parentRouteParams => this.selectedCustomerId = +parentRouteParams["id"]);
  }

}
