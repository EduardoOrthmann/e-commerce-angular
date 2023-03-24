import { CartService } from './../../cart.service';
import { NotificationService } from './../../notification.service';
import { ProductsService } from './../../products.service';
import { Product, CartProduct } from './../../products';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product: Product | undefined;
  quantity = 1;

  constructor (
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('id'));
    this.product = this.productsService.getOne(productId);
  }

  addToCart() {
    const product: CartProduct = {
      ...this.product!,
      quantity: this.quantity
    }

    this.notificationService.notify('O produto foi adicionado ao carrinho');
    this.cartService.addToCart(product);
  }
}
