import { Component } from '@angular/core';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrl: './objectives.component.css'
})
export class ObjectivesComponent {
  objetivos: string[] = [
    'Improve the user experience on our website.',
    'Increase the conversion of visitors into potential customers.',
    'Optimize application performance and loading speed.',
    'Implement agile development practices to improve project delivery.'
      ]



}


