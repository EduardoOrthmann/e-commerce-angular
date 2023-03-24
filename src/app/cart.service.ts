import { CartProduct } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartProduct[] = [];

  constructor() { }

  getCartItems() {
    this.items = JSON.parse(localStorage.getItem('cart') || '[]');
    return this.items;
  }

  addToCart(product: CartProduct) {
    this.items.push(product);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  removeItemCart(id: number) {
    this.items = this.items.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  clearCart() {
    this.items = [];
    localStorage.clear();
  }
}
