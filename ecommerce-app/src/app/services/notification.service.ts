import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private _message = signal<string | null>(null);
  message = this._message.asReadonly();

  showError(msg: string) {
    this._message.set(msg);
    setTimeout(() => this.clear(), 5000);
  }

  showSuccess(msg: string) {
    this._message.set(msg);
    setTimeout(() => this.clear(), 3000);
  }

  clear() {
    this._message.set(null);
  }
}
