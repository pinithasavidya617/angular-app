import {Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges, OnDestroy, DoCheck {

  private titlePrivate = 'Available Products';
  public titlePublic = 'Available Products';

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

  public displayProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((param => {
      const category = param['category'];
      if (category) {
        this.displayProducts = this.products.filter(p => p.category === category);
      } else {
        this.displayProducts = this.products;
      }
    }))
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Product onChanges'); //works on input changes
  }

  ngOnDestroy() {
    // console.log('Product onDestroy');
  }

  ngDoCheck() {
    // console.log('DoCheck');  // works on UI changes
  }

  ngAfterViewInit() {
    // console.log('AfterViewInit');
  }

  public onSearchChange(searchValue: any){
    if(searchValue){
      // this.displayProducts = this.products.filter(product => product.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
      this.displayProducts = this.products.filter(product => product.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())).map(
        product => {
          product.price = product.price + 10;
          return product;
        }
      );
    }else {
      this.displayProducts = this.products;
    }
  }

}

export interface Product {
  name: string;
  price: number;
  currency: string;
  category: string;
}
