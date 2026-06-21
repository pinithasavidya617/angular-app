import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../products/products.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit , OnDestroy, OnChanges{

  @Input() product?: Product;
  @Input() price?: number;

  constructor() {
    console.log('ProductComponent constructor');
  }

  ngOnInit() {
    console.log('Product OnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Product Changes', changes);
  }

  ngOnDestroy() {
    console.log("Product Destroyed");
  }


}
