import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BumpsComponent } from './bumps/bumps.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductInventoryComponent } from './product-inventory/product-inventory.component';
import { HelpComponent } from './help/help.component';

import { NgModule } from '@angular/core';
import { HelpTopicsComponent } from './help-topics/help-topics.component';
import { HelpTopicSearchComponent } from './help-topic-search/help-topic-search.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BumpsComponent,
    ProductsComponent,
    ProductListComponent,
    ProductCategoriesComponent,
    ProductInventoryComponent,
    HelpComponent,
    HelpTopicsComponent,
    HelpTopicSearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(

      [
        { path: '', pathMatch: 'full', redirectTo: 'welcome' },
        { path: 'welcome', component: WelcomeComponent },
        {
          path: 'products', component: ProductsComponent, children: [
            { path: 'list', component: ProductListComponent },
            { path: 'categories', component: ProductCategoriesComponent },
            { path: 'inventory', component: ProductInventoryComponent }
          ]
        },
        {
          path: 'help', component: HelpComponent, children: [
            { path : 'topics', component : HelpTopicsComponent },
            { path : 'search', component : HelpTopicSearchComponent }
          ]
        }

      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
