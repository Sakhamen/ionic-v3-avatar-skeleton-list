import { Component } from '@angular/core';

@Component({
  selector: 'custom-skeleton',
  templateUrl: 'custom-skeleton.html'
})
export class CustomSkeletonComponent {

  dataList: Array<any> = new Array(5);

  constructor() {}

}
