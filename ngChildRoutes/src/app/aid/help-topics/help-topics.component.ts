import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help-topics',
  templateUrl: './help-topics.component.html',
  styleUrls: ['./help-topics.component.css']
})
export class HelpTopicsComponent implements OnInit {

  topicId: number;
  constructor(private activatedRoute : ActivatedRoute) { }
 

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>this.topicId = +params['topicId']);
  }

}
