import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  messages: { text: string, sender: string, imageUrl: string }[] = [];
  newMessage: string = '';

  // Paths to user images
  userImageUrl: string = 'assets/womanuser.jpg';
  systemImageUrl: string = 'assets/mansystem.jpg';

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, sender: 'User', imageUrl: this.userImageUrl });
      this.newMessage = '';

      // Simulate receiving a reply after a short delay
      setTimeout(() => {
        this.messages.push({ text: 'This is a reply from the system.', sender: 'System', imageUrl: this.systemImageUrl });
      }, 1000); // 1-second delay
    }
  }
}