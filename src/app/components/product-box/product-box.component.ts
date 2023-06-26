import { CartService } from "src/app/services/cart.service";
import { Component, Input, LOCALE_ID, Inject } from '@angular/core';
import { formatCurrency } from '@angular/common';
import { ProductService } from "src/app/services/product.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent {

  constructor(private ProductService: ProductService, public cartService: CartService, @Inject(LOCALE_ID) public locale: string, private router: Router ) {}

  // pass prod on
  @Input() prod: any;
  // obj to fill
  @Input() product: any;
  
  @Input() imageSrc: string = "";

 // get data on click
 openPopUp(id: string){
  this.ProductService.getOneProductForBox(id).subscribe(data => {
  this.product = data;
  this.router.navigate(['/productDetails', id])
  console.log(this.product);
  })  
}

// add to cart product object, method from service
addToCart(id: string){
  this.ProductService.getOneProductForBox(id).subscribe(data => {
  this.product = data;
  this.cartService.addToCart(this.product);
  this.cartService.isCartOpen = true;
})
}

// convert price to pretty number
convertPrice(price: string){
  let Numprice = Number(price);
  let curr = formatCurrency(Numprice,this.locale,'$ ');
  return curr
}
}
