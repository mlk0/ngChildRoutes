import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BumpsComponent } from './bumps/bumps.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductInventoryComponent } from './product-inventory/product-inventory.component';
import { HelpComponent } from './help/help.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BumpsComponent,
    ProductsComponent,
    ProductListComponent,
    ProductCategoriesComponent,
    ProductInventoryComponent,
    HelpComponent
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
            { path: 'inventory', component : ProductInventoryComponent}
          ]
        },
        { path : 'help', component : HelpComponent}

      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
