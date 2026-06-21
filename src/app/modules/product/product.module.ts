import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ProductFilterComponent
  ],
  exports: [
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProductModule { }
