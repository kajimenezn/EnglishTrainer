import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css',
   encapsulation:ViewEncapsulation.None
})
export class MissionComponent implements OnInit {

  mission: string = 'Nuestra misión es proporcionar soluciones innovadoras que mejoren la vida de nuestros clientes.';
  vision: string = 'Nuestra visión es ser líderes en la industria, reconocidos por nuestro compromiso con la calidad y la excelencia.';

  constructor() { }

  ngOnInit(): void {
  }

}

export class MissionVisionComponent{
}