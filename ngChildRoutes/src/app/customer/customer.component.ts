import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  parameterValue : number;
  ngOnInit() {
    this.activatedRoute.params.subscribe(parameter => 
    {
      this.parameterValue = +parameter["id"];
      console.log(`CustomerComponent - parameterValue : ${this.parameterValue}`);
    }
    );
  }
∂
}
