import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="msg" class="fixed bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded shadow-lg">
      {{ msg }}
    </div>
  `,
})
export class NotificationComponent {
  constructor(public notifier: NotificationService) {}
  get msg() {
    return this.notifier.message();
  }
}
