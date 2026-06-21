import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  name: string = "HeadPhone";
  price: number = 25.00;
  currency: string = "USD";

}
