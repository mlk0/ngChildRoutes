import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  selectedUserId: any;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {

    //the parameter id is part of the parent route and is not accessible in params
    this.activatedRoute.params.subscribe(r=>{
      console.log(`CustomerDetailsComponent activatedRoute params : `);
      console.log(r);

      console.log(this.activatedRoute);

      console.log(this.activatedRoute.parent.params);
    })

    //however, the activated route has a reference to the parent's activatedRoute from where the exposed params 
    //can be used 
    this.activatedRoute.parent.params.subscribe(pr=>{
      console.log(pr);
      
      this.selectedUserId = pr["id"];
    });

  }

}
