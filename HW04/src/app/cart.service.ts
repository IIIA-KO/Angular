import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: { id: number; name: string; price: number; quantity: number }[] = [];

  addToCart(item: { id: number; name: string; price: number; quantity: number }): void {
    this.cartItems.push(item);
  }

  removeFromCart(itemId: number): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
  }

  clearCart(): void {
    this.cartItems = [];
  }

  getCartItems(): { id: number; name: string; price: number; quantity: number }[] {
    return this.cartItems;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getCartItemByName(name: string): { id: number; name: string; price: number; quantity: number } | null {
    return this.cartItems.find((item) => item.name === name) || null;
  }
}
