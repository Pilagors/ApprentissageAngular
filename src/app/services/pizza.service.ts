import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza'

@Injectable({
  providedIn: 'root',
})
export class PizzaService {

  pizzas: Pizza[] = [
    { id: 1, name: 'Margherita', price: 8, image: "assets/margherita.png" },
    { id: 2, name: 'Pepperoni', price: 10, image: "assets/pepperoni.png" },
    { id: 3, name: '4 Fromages', price: 12, image: "assets/fromages.png" }
  ];

  getPizzas(): Pizza[] {
    return this.pizzas
  }

}
