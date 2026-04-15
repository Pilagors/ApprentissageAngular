import { Component, Input } from '@angular/core';
import { Pizza } from '../../models/pizza';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  @Input() cart: Pizza[] = [];

  getTotal(): number {
    return this.cart.reduce((total, pizza) => total + pizza.price, 0);
  }
}
