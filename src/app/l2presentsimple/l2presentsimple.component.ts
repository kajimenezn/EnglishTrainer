import { Component } from '@angular/core';

@Component({
  selector: 'app-l2presentsimple',
  templateUrl: './l2presentsimple.component.html',
  styleUrls: ['./l2presentsimple.component.css']
})
export class L2presentsimpleComponent {

  presentsimplestructure = [
    { structure: 'S + Verb + C. ',form:'Affirmative', example: 'I bake a cake. / She drives a car.' },
    { structure: 'S + Aux (do/does) + not+ verb + C. ',form:'Negative', example: "I don't bake a cake. / She doesn't drive a car."},
    { structure: 'Aux(Do/Does) + subject + verb + c + ? ',form:'Question', example: 'Do you bake a cake? / Does she drive a car?' },
    { structure: 'Yes, + S + Aux (do/does). ',form:'Affirmative Answer', example: 'Yes, I do. / Yes, she does.' },
    { structure: 'No, + S + Aux (do/does) + not.',form:'Negative Answer', example: "Yes, I don't. / No, she doesn't." },
  ];

  sentences: string[] = [
    '1. She (play)__________  tennis on weekends.',
    '2. They usually (go) __________ to that Chinese restaurant.',
    '3. I (do not) __________ have a pencil.'
  ];

  userAnswers: string[] = [];

  correctAnswers: string[]= ['plays','go',"don't"]; // Respuestas correctas

  onAnswerChange(index: number, value: string) {
    this.userAnswers[index] = value;
  }

  checkAnswer(index: number): boolean {
    return this.userAnswers[index] === this.correctAnswers[index];
  }

}

