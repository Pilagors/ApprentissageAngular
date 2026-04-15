import { Component } from '@angular/core';
import { PizzaService } from '../../services/pizza.service';
import { Pizza } from '../../models/pizza';

@Component({
  selector: 'app-pizza-list',
  imports: [],
  templateUrl: './pizza-list.html',
  styleUrl: './pizza-list.css',
})
export class PizzaList {
  pizzas: Pizza[] = [];
  cart: Pizza[] = [];

  constructor(private pizzaService: PizzaService) {
    this.pizzas = this.pizzaService.getPizzas();
  }

  addToCart(pizza: Pizza) {
    this.cart.push(pizza);
  }
}
