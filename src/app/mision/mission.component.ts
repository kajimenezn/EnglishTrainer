import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css',
   encapsulation:ViewEncapsulation.None
})
export class MissionComponent implements OnInit {

  mission: string = 'Transformar la enseñanza del idioma Inglés en instituciones ' +
      'fiscales y fiscomisionales mediante el uso creativo y efectivo de herramientas ' +
      'educativas innovadoras. Proporcionamos programas educativos de calidad que ' +
      'fomentan la fluidez lingüística y la competencia comunicativa, promoviendo ' +
      'un aprendizaje colaborativo y centrado en el estudiante.';
  vision: string = 'Ser líderes reconocidos en la mejora continua de la enseñanza del ' +
      'idioma Inglés en instituciones fiscales y fiscomisionales. Inspirar y capacitar ' +
      'a estudiantes y educadores mediante la innovación educativa, preparándolos para ' +
      'el éxito en un entorno globalizado y multicultural';


  constructor() { }

  ngOnInit(): void {
  }

}

export class MissionVisionComponent{
}