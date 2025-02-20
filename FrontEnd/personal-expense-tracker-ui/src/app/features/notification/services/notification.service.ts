import { Injectable } from '@angular/core';
import { Client, Message } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private stompClient!: Client;

  constructor() { }

  connect(userId: string): void {
    const wsUrl = environment.websocketUrl;
    
    this.stompClient = new Client({
      brokerURL: wsUrl,
      reconnectDelay: 5000,
      webSocketFactory: () => new SockJS(wsUrl)
    });

    this.stompClient.onConnect = () => {
      this.stompClient.subscribe(
        `/users/${userId}/notifications`,
        (message: Message) => {
          console.log(message.body);
        }
      );
    };

    this.stompClient.onStompError = (frame) => {
      console.error('STOMP error:', frame.headers['message']);
    };

    this.stompClient.activate();
  }

  closeConnection(): void {
    this.stompClient?.deactivate();
  }
}
