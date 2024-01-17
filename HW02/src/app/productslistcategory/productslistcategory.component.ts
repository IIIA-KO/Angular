import { Component } from '@angular/core';

@Component({
  selector: 'app-productslistcategory',
  templateUrl: './productslistcategory.component.html',
  styleUrls: ['./productslistcategory.component.css']
})
export class ProductslistcategoryComponent {
  selectedCategory: string = '';
  
  products = [
    { name: 'Телевізор', category: 'Електроніка', price: 1000 },
    { name: 'Ноутбук', category: 'Електроніка', price: 1500 },
    { name: 'Футболка', category: 'Одяг', price: 20 },
    { name: 'Джинси', category: 'Одяг', price: 50 },
    { name: 'Годинник', category: 'Аксесуари', price: 100 },
    { name: 'Сонячні окуляри', category: 'Аксесуари', price: 30 },
  ];

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
