import { Component } from '@angular/core';

@Component({
  selector: 'app-l3presentcontinuous',
  templateUrl: './l3presentcontinuous.component.html',
  styleUrl: './l3presentcontinuous.component.css'
})
export class L3presentcontinuousComponent {

  presentcontinuousstructure = [
    { structure: 'S + V(to be) + V(ing form) + C. ',form:'Affirmative', example: 'We are swimming in the club. / She is preparing the dinner.' },
    { structure: 'S + V(to be) + not + V(ing form) + C. ',form:'Negative', example: "We are not swimming in the club. / She is not preparing the dinner."},
    { structure: 'V(to be) + subject + v(ing form) + c + ? ',form:'Question', example: 'Are we swimming in the club? / Is she preparing the dinner?' },
    { structure: 'Yes, + S + v(to be). ',form:'Affirmative Answer', example: 'Yes, we are. / Yes, she is.' },
    { structure: 'No, + S + v(to be) + not.',form:'Negative Answer', example: "No, we are not. / No, she is not." },
  ];

  sentences: string[] = [

    'Patrick __________ the English language.',
    "Susy __________ that realistic drawing.",
    "It __________ raining today."
  ];

  words = [
    '1. Learn',
    '2. Paint',
    '3. Rain (negative)'
  ];

  userAnswers: string[] = [];

  correctAnswers: string[]= ['is learning','is painting',"is not raining"]; // Respuestas correctas

  onAnswerChange(index: number, value: string) {
    this.userAnswers[index] = value;
  }

  checkAnswer(index: number): boolean {
    return this.userAnswers[index] === this.correctAnswers[index];
  }

}
