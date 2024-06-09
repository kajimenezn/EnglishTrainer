import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  imagenes: string[]=["./assets/education1.jpg",
    "./assets/education2.jpg",
    "./assets/parafondo1.png"]

}
