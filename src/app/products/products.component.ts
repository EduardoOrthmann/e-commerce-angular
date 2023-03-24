import { ActivatedRoute } from '@angular/router';
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

  constructor (private productsService: ProductsService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const products = this.productsService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const description = params.get('description')?.toLowerCase();

      if (description) {
        this.products = products.filter(product => product.description.toLowerCase().includes(description));
        return;
      }

      this.products = products;
    });
  }
}
