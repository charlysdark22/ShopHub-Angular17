import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { cartStore } from '../../store/cart.store';
import { ShortDescriptionPipe } from '../../pipes/short-description-pipe';
import { CustomDirective } from '../../directives/custom';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ShortDescriptionPipe, CustomDirective],
  template: `
    <div class="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div *ngFor="let p of products" class="border p-4 rounded shadow-sm">
        <img [src]="p.image" class="h-40 w-full object-contain" alt="{{p.title}}" />
        <h3 class="font-semibold mt-2">{{ p.title }}</h3>
        <p class="text-sm text-gray-600">{{ p.description | shortDescription:60 }}</p>
        <div class="mt-2 flex justify-between items-center">
          <span class="font-bold">${{ p.price }}</span>
          <button appCustomDirective (customClick)="addToCart(p)" class="bg-blue-600 text-white px-3 py-1 rounded">Agregar</button>
        </div>
      </div>
    </div>
  `,
})
export class ProductListComponent implements OnInit {
  private svc = inject(ProductService);
  products: any[] = [];

  ngOnInit() {
    this.svc.getProducts().subscribe((data) => (this.products = data));
  }

  addToCart(p: any) {
    cartStore.add(p);
  }
}
