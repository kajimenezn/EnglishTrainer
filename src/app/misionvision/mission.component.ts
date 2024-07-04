import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mision-vision',
  templateUrl: './mission-vision.component.html',
  styleUrl: './mission-vision.component.css'
})
export class MissionVisionComponent implements OnInit {

  mision: string = 'Nuestra misión es proporcionar soluciones innovadoras que mejoren la vida de nuestros clientes.';
  vision: string = 'Nuestra visión es ser líderes en la industria, reconocidos por nuestro compromiso con la calidad y la excelencia.';

  constructor() { }

  ngOnInit(): void {
  }

}

export class MisionvisionComponent {
}