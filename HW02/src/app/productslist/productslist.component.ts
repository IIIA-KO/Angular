import { Component } from '@angular/core';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent {
  products = [
    { name: 'Товар 1', price: 100, discount: 10 },
    { name: 'Товар 2', price: 200, discount: 0 },
    { name: 'Товар 3', price: 150, discount: 20 },
    { name: 'Товар 4', price: 300, discount: 0 },
    { name: 'Товар 5', price: 350, discount: 30 }
  ];
}
