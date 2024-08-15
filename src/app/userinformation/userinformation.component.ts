import { Component } from '@angular/core';
import {DatosUsuario} from "../_model/usuario";

@Component({
  selector: 'app-userinformation',
  templateUrl: './userinformation.component.html',
  styleUrl: './userinformation.component.css'
})
export class UserinformationComponent {
  strusuario=localStorage.getItem("datosUsuario");
  usuario:DatosUsuario;
  constructor() {
    this.usuario=JSON.parse(this.strusuario as string);
  }
}
