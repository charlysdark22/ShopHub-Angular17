import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cartStore } from '../../store/cart.store';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-4 max-w-3xl mx-auto">
      <h2 class="text-xl font-bold mb-4">Carrito</h2>
      <div *ngFor="let item of items; let i = index" class="flex justify-between items-center border-b py-2">
        <div>
          <div class="font-semibold">{{ item.title }}</div>
          <div class="text-sm text-gray-600">${{ item.price }}</div>
        </div>
        <div>
          <button (click)="remove(i)" class="text-red-600">Eliminar</button>
        </div>
      </div>
      <div class="mt-4 text-right font-bold">Total: ${{ total }}</div>
    </div>
  `,
})
export class CartComponent {
  items = cartStore.items();
  total = cartStore.total();

  remove(i: number) {
    cartStore.remove(i);
  }
}
