import {Component, Input} from '@angular/core';
import {Pregunta} from "../_model/pregunta";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent {
  @Input() pregunta!: Pregunta;

}
