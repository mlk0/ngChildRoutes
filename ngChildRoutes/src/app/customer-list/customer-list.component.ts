import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor() { }

  customers : any = [
    {name : 'John', id : 2 },
    {name : 'Jane', id : 7 }
  ];

  ngOnInit() {
  }

}
