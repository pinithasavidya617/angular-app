import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  private titlePrivate = 'Available Products';
  public titlePublic = 'Available Products';

  public products: Product[] = [
    {
      name: "Head phone",
      price: 25,
      currency: "USD"
    },

    {
      name: "USB",
      price: 3000,
      currency: "LKR"
    }
  ]

  constructor() {
  }

}

export interface Product {
  name: string;
  price: number;
  currency: string;
}
