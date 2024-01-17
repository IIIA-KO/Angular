import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  itemName: string = '';
  itemPrice: number = 0;

  constructor(private cartService: CartService) {}

  addToCart(): void {
    const existingItem = this.cartService.getCartItemByName(this.itemName);
    if (existingItem) {
      existingItem.quantity++;
      existingItem.price = this.itemPrice; // Оновлення ціни товару
    } else {
      const item = { id: this.generateItemId(), name: this.itemName, price: this.itemPrice, quantity: 1 };
      this.cartService.addToCart(item);
    }
    this.itemName = '';
    this.itemPrice = 0;
  }

  isValidInput(): boolean {
    return this.itemName != null && this.itemPrice > 0;
  }

  private generateItemId(): number {
    return Math.floor(Math.random() * 1000);
  }
}
