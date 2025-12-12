import { signal } from '@angular/core';
import { ProductService } from '../services/product.service';

export const productsStore = (() => {
  const items = signal<any[]>([]);

  const load = async (svc: ProductService) => {
    svc.getProducts().subscribe((data) => items.set(data));
  };

  return {
    items: items.asReadonly(),
    load,
  };
})();
