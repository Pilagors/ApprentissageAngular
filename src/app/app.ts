import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PizzaList } from './components/pizza-list/pizza-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PizzaList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('td_pizza');
}
