import { Component } from '@angular/core';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrl: './objectives.component.css'
})
export class ObjectivesComponent {
  objetivos: string[] = [
    'Mejorar la experiencia del usuario en nuestro sitio web.',
    'Incrementar la conversión de visitantes en clientes potenciales.',
    'Optimizar el rendimiento y la velocidad de carga de la aplicación.',
    'Implementar prácticas de desarrollo ágiles para mejorar la entrega de proyectos.'
      ]
}


