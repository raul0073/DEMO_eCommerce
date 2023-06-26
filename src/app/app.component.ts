import { Component, Input } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  cartItemsSum: number = 0;

  constructor(public cartService: CartService){}

  ngOnInit() {
    this.cartItemsSum = this.cartService.cartItems.length;
  }

  openCart(){
    this.cartService.isCartOpen = true;
  }

}
