import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css',
   encapsulation:ViewEncapsulation.None
})
export class MissionComponent implements OnInit {

  mission: string = 'Transform the teaching of the English language'+' in '+'fiscales ' +
      'and fiscomisionales institutions through the creative and effective use of ' +
      'innovative tools. Providing a quality educational program that'+' '+
      'encourage linguistic fluency and communicative competence, promoting ' +
      'a collaborative and student-centered learning.';


  vision: string =  ' Being recognized as a leader application' +' ' +'in' +' the continuous improvement of the English ' +
      'language teaching in fiscales and fiscomisionales institutions. Inspire and empower ' +
      'to students and educators through educational innovation, preparing them for ' +
      'success in a globalized and multicultural environment';

   constructor() { }

  ngOnInit(): void {
  }

}

export class MissionVisionComponent{
}