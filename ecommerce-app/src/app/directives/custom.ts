import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  standalone: true
})
export class CustomDirective {
  @Output() customClick = new EventEmitter<void>();

  @HostListener('click')
  onClick() {
    console.log('Elemento clickeado!');
    this.customClick.emit();
    // Aquí puedes agregar cualquier acción
  }
}