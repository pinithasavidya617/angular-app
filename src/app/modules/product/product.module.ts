import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import {FormsModule} from "@angular/forms";
import {ProductRoutingModule} from "./product-routing.module";
import { ViewComponent } from './components/view/view.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ProductFilterComponent,
    ViewComponent
  ],
  exports: [
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
