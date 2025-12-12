import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _authenticated = signal(false);
  isAuthenticated = this._authenticated.asReadonly();

  login(email: string, password: string) {
    // Simulated authentication
    if (email && password && password.length >= 6) {
      this._authenticated.set(true);
      return true;
    }
    return false;
  }

  logout() {
    this._authenticated.set(false);
  }
}
