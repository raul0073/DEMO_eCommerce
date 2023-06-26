import { Injectable, EventEmitter } from '@angular/core';
import { ProductForBox } from "../classes/product-for-box";

@Injectable({
  providedIn: 'root'
})


export class CartService {
 // cretae a shoppin list
 cartItems: Array<ProductForBox> = [];
 // try to transmit the number of product in the cart
 cartItemsUpdated: EventEmitter<ProductForBox[]> = new EventEmitter<ProductForBox[]>();

 // bool to know if cart is open
 isCartOpen: boolean = false;
 sum: number = 0;

 // add to cart
 addToCart(prod: ProductForBox){
  // add item to cart
   this.cartItems.push(prod);
   // set cart to open state
   this.isCartOpen = true;
   // trnasmit that shit
   this.cartItemsUpdated.emit(this.cartItems);
   return this.cartItems
 }

 // remove from cart
 removeFromCart(prod: ProductForBox){
  // get this product index
   let index = this.cartItems.indexOf(prod)
   // cut him off
   this.cartItems = this.cartItems.splice(index, 1);
   // transmit new length
   this.cartItemsUpdated.emit(this.cartItems);
   return this.cartItems;
 }

 //close cart
 closeCart(){
   this.isCartOpen = false;
 }

 // calc sum of cart
 getCartSum(): number {
   let sum: number  = 0;
   this.cartItems.forEach(prod => {
     let prodPrice = Number(prod.price)
     sum += prodPrice
   });
   return sum;
 }

 ngOnInit(){
   this.getCartSum()
 }
}
