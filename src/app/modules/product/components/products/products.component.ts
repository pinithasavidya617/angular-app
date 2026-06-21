import {
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../services/products.service';
import {Product} from "../../../../models/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {

  private titlePrivate: string = 'Available Products';
  public titlePublic: string = 'Available Products';

  public displayProducts: Product[] = [];
  public category: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe((param: Params) => {

      const category: any = param['category'];

      if (category) {

        this.category = category;

        this.displayProducts = this.productService.getFilteredProducts({
          category: this.category,
          name: ''
        });

      } else {

        this.displayProducts = this.productService.getAllProducts();

      }

    });

  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
  }

  ngDoCheck(): void {
  }

  get title(): string {
    return this.titlePrivate;
  }

  public onSearchChange(searchValue: any): void {

    if (searchValue && searchValue.length > 0) {

      this.displayProducts = this.productService.getFilteredProducts({
        category: this.category,
        name: searchValue
      });

    } else {

      this.displayProducts = this.productService.getFilteredProducts({
        category: this.category,
        name: ''
      });

    }

  }

}
