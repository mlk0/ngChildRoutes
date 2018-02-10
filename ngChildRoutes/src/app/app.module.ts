import { BrowserModule } from '@angular/platform-browser';
// import { Routegit rModule } from "@angular/router";

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

// import { ProductsComponent } from './products/products.component';
// import { ProductListComponent } from './product-list/product-list.component';
// import { ProductCategoriesComponent } from './product-categories/product-categories.component';
// import { ProductInventoryComponent } from './product-inventory/product-inventory.component';

// import { HelpComponent } from './help/help.component';
// import { HelpTopicsComponent } from './help-topics/help-topics.component';
// import { HelpTopicSearchComponent } from './help-topic-search/help-topic-search.component';

import { NgModule } from '@angular/core';

// import { UsersComponent } from './users/users.component';
// import { UserListComponent } from './user-list/user-list.component';
// import { UserAdminListComponent } from './user-admib-list/user-admib-list.component';
// import { UserDetailsComponent } from './user-details/user-details.component';

import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { CustomerActivityComponent } from './customer-activity/customer-activity.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerSubscriptionComponent } from './customer-subscription/customer-subscription.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProductModule } from './product/product.module';
import { AidModule } from './aid/aid.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,

    // ProductsComponent,
    // ProductListComponent,
    // ProductCategoriesComponent,
    // ProductInventoryComponent,
    
    // HelpComponent,
    // HelpTopicsComponent,
    // HelpTopicSearchComponent,

    // UsersComponent,
    // UserListComponent,
    // UserAdminListComponent,
    // UserDetailsComponent,

    CustomersComponent,
    CustomerDetailsComponent,
    CustomerOrdersComponent,
    CustomerActivityComponent,
    CustomerListComponent,
    CustomerComponent,
    CustomerSubscriptionComponent,
    FlightsComponent,
    FlightListComponent,
    FlightDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    ProductModule,
    
    AidModule,
    UserModule,

    AppRoutingModule,

    // RouterModule.forRoot(

    //   [
    //     { path: '', pathMatch: 'full', redirectTo: 'welcome' },
    //     { path: 'welcome', component: WelcomeComponent },
    //     {
    //       path: 'products', component: ProductsComponent, children: [
    //         { path: 'list', component: ProductListComponent },
    //         { path: 'categories', component: ProductCategoriesComponent },
    //         { path: 'inventory', component: ProductInventoryComponent }
    //       ]
    //     },
    //     {
    //       path: 'help', component: HelpComponent, children: [
    //         { path: 'topics', component: HelpTopicsComponent },
    //         { path: 'search', component: HelpTopicSearchComponent }
    //       ]
    //     },
    //     {
    //       path: 'users', component: UsersComponent, children: [
    //         { path: '', redirectTo: 'list', pathMatch: 'full' },
    //         { path: 'list', component: UserListComponent },
    //         { path: 'admins', component: UserAdminListComponent },
    //         { path: ':id', component: UserDetailsComponent },
    //       ]
    //     },
    //     {
    //       path: 'customers', component: CustomersComponent, children: [
    //         { path: '', redirectTo: 'list', pathMatch: 'full' },
    //         { path: 'list', component: CustomerListComponent },
    //         { path: 'subscription', component: CustomerSubscriptionComponent }

    //       ]
    //     },
    //     {
    //       path: 'customers/:id', component: CustomerComponent, children: [
    //         { path: '', redirectTo: 'overview', pathMatch: 'full' },

    //         { path: 'overview', component: CustomerDetailsComponent },
    //         { path: 'orders', component: CustomerOrdersComponent },
    //         { path: 'activity', component: CustomerActivityComponent }
    //       ]
    //     },
    //     {
    //       path: 'flights', component: FlightsComponent, children: [
    //         { path: 'list', component: FlightListComponent, outlet: 'master' },
    //         { path: 'itinerary', component: FlightDetailsComponent, outlet: 'details' },
    //         { path: ':id', component: FlightDetailsComponent, outlet: 'details' },
    //         { path: ':id/tst', component: FlightDetailsComponent, outlet: 'details' },

    //         { path: 'itinerary:showStatus', component: FlightDetailsComponent, outlet: 'details' }
    
    //       ]
    //     }


    //   ]
    // )



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
