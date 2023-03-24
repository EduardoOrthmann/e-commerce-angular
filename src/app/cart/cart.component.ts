import { NotificationService } from './../notification.service';
import { CartProduct } from './../products';
import { CartService } from './../cart.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: CartProduct[] = [];
  total = 0;

  constructor (public cartService: CartService, private notificationService: NotificationService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  removeItemCart(id: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
    this.cartService.removeItemCart(id);
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0);
  }

  buy() {
    this.notificationService.notify('Parabéns, você finalizou a sua compra!');
    this.cartService.clearCart();
    this.router.navigate(['products']);
  }
}
