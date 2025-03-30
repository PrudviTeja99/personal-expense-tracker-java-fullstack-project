import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NotificationService } from '../../../features/notification/services/notification.service';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  providers: [NotificationService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private notificationService: NotificationService,private authService:AuthService) {
    this.notificationService.connect('john');
  }
  logout(){
    console.log("logout !!");
    this.authService.logout();
  }
  onDestroy(){
    this.notificationService.closeConnection();
  }
}
