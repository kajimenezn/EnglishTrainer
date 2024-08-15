import { Component } from '@angular/core';
import {DatosUsuario} from "../_model/usuario";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  strusuario=localStorage.getItem("datosUsuario");
  usuario:DatosUsuario;
  constructor() {
    this.usuario=JSON.parse(this.strusuario as string);
  }

  messages: { text: string, sender: string, imageUrl: string }[] = [];
  newMessage: string = '';
  phrases:string[]=['Hello','My name is Alex',"I'm from Chicago",'And you?' +
  '' ];

  // Paths to user images
  userImageUrl: string = 'assets/womanuser.jpg';
  systemImageUrl: string = 'assets/mansystem.jpg';

  sendMessage(): void {console.log(this.usuario)
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, sender: this.usuario.nombreCompleto, imageUrl: this.userImageUrl });
      this.newMessage = '';

      // Simulate receiving a reply after a short delay
      setTimeout(() => {

        this.messages.push({ text: this.phrases[(this.messages.length-1) / 2], sender: 'Friend', imageUrl: this.systemImageUrl });
      }, 1000); // 1-second delay
    }
  }
}