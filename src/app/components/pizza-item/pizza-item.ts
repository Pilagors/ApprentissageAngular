import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../../models/pizza';

@Component({
  selector: 'app-pizza-item',
  standalone: true,
  templateUrl: './pizza-item.html',
  styleUrl: './pizza-item.css',
})
export class PizzaItem {
  @Input() pizza!: Pizza;
  @Output() add = new EventEmitter<Pizza>();

  addToCart() {
    this.add.emit(this.pizza)
  }
}
