import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-4 max-w-md mx-auto">
      <h2 class="text-xl font-bold mb-4">Iniciar sesión</h2>
      <form (submit)="onSubmit($event)">
        <label class="block">Email</label>
        <input name="email" type="email" class="w-full border p-2 rounded mb-2" required />
        <label class="block">Password</label>
        <input name="password" type="password" class="w-full border p-2 rounded mb-2" required minlength="6" />
        <div class="text-right">
          <button class="bg-blue-600 text-white px-4 py-2 rounded">Ingresar</button>
        </div>
      </form>
    </div>
  `,
})
export class AuthComponent {
  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    if (this.auth.login(email, password)) {
      this.router.navigate(['/']);
    } else {
      alert('Credenciales inválidas (simulado)');
    }
  }
}
