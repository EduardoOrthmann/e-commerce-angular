import { ProductsService } from './../products.service';
import { Product } from '../products';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] | undefined;

  constructor (private productsService: ProductsService){}

  ngOnInit(): void {
    this.products = this.productsService.getAll();
  }
}
