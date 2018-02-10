import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HelpComponent } from './help/help.component';
import { HelpTopicsComponent } from './help-topics/help-topics.component';
import { HelpTopicSearchComponent } from './help-topic-search/help-topic-search.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'help', component: HelpComponent, children: [
          { path: 'topics', component: HelpTopicsComponent },
          { path: 'search', component: HelpTopicSearchComponent }
        ]
      }
    ])
  ],
  //exports : [HelpComponent],
  declarations: [
    HelpComponent,
    HelpTopicsComponent,
    HelpTopicSearchComponent
  ]

})
export class AidModule { }
