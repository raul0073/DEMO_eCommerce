import { Component } from '@angular/core';
import {ProductForBox} from "../../classes/product-for-box";
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
 // items list
 cartItems: ProductForBox[] = [];
 // is open?
 isCartOpen: boolean = false;
 cartSum: number = 0;

 constructor(private cartService: CartService) {}

 
 // on component initialization
 ngOnInit() {
   this.cartItems = this.cartService.cartItems;
   this.isCartOpen = this.cartService.isCartOpen;
   this.getCartSum();
   console.log(this.cartItems)
 }

 closeCart() {
   this.isCartOpen = false;
   this.cartService.isCartOpen = false;
   console.log("Clicked cart-comp");
 }

 getCartSum(){
   this.cartItems.forEach(cartItem => {this.cartSum += cartItem.price})
 }

 removeItem(index: any) {
   this.cartService.removeFromCart(index);
   console.log("Removed");
 }
}

