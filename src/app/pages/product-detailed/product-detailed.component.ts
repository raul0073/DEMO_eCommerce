import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-detailed',
  templateUrl: './product-detailed.component.html',
  styleUrls: ['./product-detailed.component.scss']
})
export class ProductDetailedComponent {

  constructor(private route: ActivatedRoute, public productS: ProductService, public cartS: CartService) { }

  productDetails: any;
  product: any;

// add to cart product object, method from service
addToCart(id: string){
  this.productS.getOneProductForBox(id).subscribe(data => {
  this.product = data
  this.cartS.addToCart(this.product);
  this.cartS.isCartOpen = true;
})
}
  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.cartS.isCartOpen = false;
      this.productS.getOneProductForBox(productId).subscribe(data => {
      this.productDetails = data;
    })
  })
}}
