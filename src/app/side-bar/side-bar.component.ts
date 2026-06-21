import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  constructor(
    private navigation: Router
  ) {
  }

  onClickSideNav(category: string){
    if(category === ''){
      this.navigation.navigate(['/app/products'], {
        queryParams: {
          category: null
        },
        queryParamsHandling: "merge"
      });
    }else {
      this.navigation.navigate(['/app/products'], {
        queryParams: {
          category: category
        }
      });
    }
  }
}
