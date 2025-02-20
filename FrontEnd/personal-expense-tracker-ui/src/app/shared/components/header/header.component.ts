import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NotificationService } from '../../../features/notification/services/notification.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  providers: [NotificationService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private notificationService: NotificationService) {
    this.notificationService.connect('john');
  }
}
