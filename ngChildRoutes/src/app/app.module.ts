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
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAdminListComponent } from './user-admib-list/user-admib-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { CustomerActivityComponent } from './customer-activity/customer-activity.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerSubscriptionComponent } from './customer-subscription/customer-subscription.component';

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
    HelpTopicSearchComponent,
    UsersComponent,
    UserListComponent,
    UserAdminListComponent,
    UserDetailsComponent,
    CustomersComponent,
    CustomerDetailsComponent,
    CustomerOrdersComponent,
    CustomerActivityComponent,
    CustomerListComponent,
    CustomerComponent,
    CustomerSubscriptionComponent
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
            { path: 'topics', component: HelpTopicsComponent },
            { path: 'search', component: HelpTopicSearchComponent }
          ]
        },
        {
          path: 'users', component: UsersComponent, children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: UserListComponent },
            { path: 'admins', component: UserAdminListComponent },
            { path: ':id', component: UserDetailsComponent },
          ]
        },
        {
          path: 'customers', component: CustomersComponent, children: [
              { path : '', redirectTo : 'list', pathMatch : 'full'},
              { path : 'list', component : CustomerListComponent },
              { path : 'subscription', component : CustomerSubscriptionComponent}
             
          ]
        },
        {
          path: 'customers/:id', component: CustomerComponent, children: [
              { path : '', redirectTo : 'overview', pathMatch : 'full'},
             
              { path : 'overview', component : CustomerDetailsComponent },
              { path : 'orders', component : CustomerOrdersComponent },
              { path : 'activity', component : CustomerActivityComponent }
          ]
        }


      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
