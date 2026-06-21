import {Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

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
      currency: "USD"
    },

    {
      name: "USB",
      price: 3000,
      currency: "LKR"
    }
  ];

  public displayProducts: Product[] = [];

  constructor() {
    // console.log('Product constructor');
  }

  ngOnInit() {
    this.displayProducts = this.products;
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
}
