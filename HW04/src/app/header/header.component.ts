import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  removeFromCart(itemId: number): void {
    this.cartService.removeFromCart(itemId);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  getCartItems(): { id: number, name: string, price: number, quantity: number }[] {
    return this.cartService.getCartItems();
  }

  getCartItemsCount(): number {
    return this.cartService.getCartItems().length;
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }
}
