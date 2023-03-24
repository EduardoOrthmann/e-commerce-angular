import { products } from './products';
import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = products;

  constructor() { }

  getAll() {
    return this.products;
  }

  getOne(id: number) {
    return this.products.find(product => product.id === id)
  }
}
