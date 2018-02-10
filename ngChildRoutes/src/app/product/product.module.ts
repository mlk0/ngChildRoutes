import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductInventoryComponent } from './product-inventory/product-inventory.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path: 'products', component: ProductsComponent, children: [
            { path: 'list', component: ProductListComponent },
            { path: 'categories', component: ProductCategoriesComponent },
            { path: 'inventory', component: ProductInventoryComponent }
          ]
        }
      ]
    )
  ],
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductCategoriesComponent,
    ProductInventoryComponent,
    
  ]
})
export class ProductModule { }
