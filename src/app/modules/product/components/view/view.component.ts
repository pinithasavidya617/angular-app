import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // console.log(this.route.snapshot.params);
    const id = this.route.snapshot.params['id'];
  }

}
