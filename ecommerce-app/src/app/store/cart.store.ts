import { signal, computed } from '@angular/core';

export const cartStore = (() => {
  const items = signal<any[]>([]);

  const add = (product: any) => {
    items.update((list) => [...list, product]);
  };

  const remove = (index: number) => {
    items.update((list) => list.filter((_, i) => i !== index));
  };

  const clear = () => items.set([]);

  const total = computed(() =>
    items().reduce((s, it) => s + (it.price || 0), 0)
  );

  return {
    items: items.asReadonly(),
    add,
    remove,
    clear,
    total,
  };
})();
