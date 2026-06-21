import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  private titlePrivate = 'Available Products';
  public titlePublic = 'Available Products';

  constructor() {
  }
}
