import { CanDeactivateFn } from '@angular/router';
import { cartStore } from '../store/cart.store';

export const canDeactivateGuard: CanDeactivateFn = (component, currentRoute, currentState, nextState) => {
  const hasItems = cartStore.items().length > 0;
  if (hasItems) {
    return confirm('Hay artículos en el carrito. ¿Seguro que desea salir?');
  }
  return true;
};
