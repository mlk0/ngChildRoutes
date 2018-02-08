import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BumpsComponent } from './bumps/bumps.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BumpsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(

      [
        { path : '', pathMatch : 'full', redirectTo : 'welcome'},
        { path : 'welcome', component : WelcomeComponent },
        { path : 'bum', component : BumpsComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
