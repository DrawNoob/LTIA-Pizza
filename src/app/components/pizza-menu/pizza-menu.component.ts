import { Component } from '@angular/core';
import { PizzaData } from '../models/pizza.model';

@Component({
  selector: 'app-pizza-menu',
  templateUrl: './pizza-menu.component.html',
  styleUrls: ['./pizza-menu.component.scss']
})
export class PizzaMenuComponent {
  loadedPosts: PizzaData[] = [];
}
