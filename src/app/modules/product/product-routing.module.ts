import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./components/products/products.component";
import {ProductComponent} from "./components/product/product.component";
import {ViewComponent} from "./components/view/view.component";


const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'view-product', component: ViewComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
