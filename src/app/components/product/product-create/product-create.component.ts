import { IProduct } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: IProduct = {
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produco cadastrado');
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
