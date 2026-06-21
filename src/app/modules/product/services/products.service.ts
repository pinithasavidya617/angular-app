import { Injectable } from '@angular/core';
import {Product} from "../../../models/product";
import {filter} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products: Product[] = [
    {
      name: "Head phone",
      price: 25,
      currency: "USD",
      category: "ELEC"
    },

    {
      name: "USB",
      price: 3000,
      currency: "LKR",
      category: "ELEC"

    },


    {
      name: "Egg",
      price: 30,
      currency: "LKR",
      category: "FOOD"

    },


    {
      name: "Penadol",
      price: 30,
      currency: "LKR",
      category: "MED"

    }
  ];


  constructor() { }
  getFilteredProducts(filter: ProductFilter): Product[] {
    return this.products.filter((product: Product) => {
      if (!filter) {
        return product;
      }

      return (
        (filter.category === undefined ||
          filter.category === '' ||
          product.category === filter.category) &&

        (filter.name === undefined ||
          product.name.toLowerCase().includes(
            filter.name.toLowerCase()
          ))
      );
    });
  }

  getAllProducts(): Product[] {
    return this.products;
  }
}

export interface ProductFilter{
  name: String;
  category: String;
}
