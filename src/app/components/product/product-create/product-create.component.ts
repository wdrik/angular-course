import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  myAttr = 'anywhere';

  constructor() { }

  ngOnInit(): void {
  }

  change(): void {
    console.log('change');
    console.log(this.myAttr);
  }
}
