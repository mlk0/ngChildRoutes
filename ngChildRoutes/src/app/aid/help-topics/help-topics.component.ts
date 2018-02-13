import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help-topics',
  templateUrl: './help-topics.component.html',
  styleUrls: ['./help-topics.component.css']
})
export class HelpTopicsComponent implements OnInit {

  
  showArchived: any;
  exportDocumentFormat: any;
  languageCode: any;
  code: string;
  topicId: number;
  constructor(private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => { 
      this.topicId = +params['topicId'];
      this.code = params['topicKey'];
      this.languageCode = params['language'];
    }
  );


  this.activatedRoute.queryParams.subscribe(qp=>{
    this.exportDocumentFormat = qp['exportFormat'];
    this.showArchived = qp['listArchived']
  });

  }

}
