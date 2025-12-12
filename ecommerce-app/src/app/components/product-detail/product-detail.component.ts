import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { cartStore } from '../../store/cart.store';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-4 max-w-3xl mx-auto">
      <div *ngIf="product" class="flex flex-col md:flex-row gap-4">
        <img [src]="product.image" class="w-full md:w-1/3 object-contain" />
        <div class="md:flex-1">
          <h2 class="text-2xl font-bold">{{ product.title }}</h2>
          <p class="mt-2 text-gray-700">{{ product.description }}</p>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-xl font-semibold">${{ product.price }}</span>
            <button (click)="add()" class="bg-green-600 text-white px-4 py-2 rounded">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private svc = inject(ProductService);
  product: any | null = null;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.svc.getProduct(id).subscribe((p) => (this.product = p));
    }
  }

  add() {
    if (this.product) cartStore.add(this.product);
  }
}
