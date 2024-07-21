import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  imagenes: string[]=["./assets/education4.jpg",
    "./assets/education2.jpg",
    "./assets/education3.jpg"]

  enlaces: string[]=["./assets/education4.jpg",
    "./assets/education2.jpg",
    "./assets/education3.jpg"]


  nivelesIngles=[{ id: 1, linkImagen:"./assets/education4.jpg", linkPagina:''},
    { id: 2, linkImagen:"./assets/education2.jpg", linkPagina:["/tr/level1"]},
    { id: 3, linkImagen:"./assets/education3.jpg", linkPagina:['/tr/level2']},
  //  { id: 4, linkImagen:"./assets/education4.jpg", linkPagina:'/tr/level3'}
  ];

}


