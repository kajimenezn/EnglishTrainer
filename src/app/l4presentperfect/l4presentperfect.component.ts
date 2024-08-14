import { Component } from '@angular/core';

@Component({
  selector: 'app-l4presentperfect',
  templateUrl: './l4presentperfect.component.html',
  styleUrl: './l4presentperfect.component.css'
})
export class L4presentperfectComponent {
  presentperfectstructure = [
    { structure: 'S + have + V(past participle) + C. ',form:'Affirmative', example: 'Susy has read a famous book. / They have gone out to the market.' },
    { structure: 'S + have + V(past participle) + c.  ',form:'Negative', example: "Susy has not read a famous book. / They have not gone out to the market."},
    { structure: 'Have + subject + V(past participle)+ c + ? ',form:'Question', example: 'Has Susy read a famous book? / Have they gone out to the market?' },
    { structure: 'Yes, + S + have/has.',form:'Affirmative Answer', example: "Yes, she has. / Yes, they have." },
    { structure: 'No, + S + have/has + not.',form:'Negative Answer', example: "No, she has not./ Yes, they have not." },
  ];

  sentences: string[] = [

    'Ann __________  the guitar since the morning.',
    "I __________ this article for the People's magazine.",
    "Sam __________ to Michael about the party."
  ];

  words = [
    '1. Play',
    '2. Write',
    '3. Talk (negative)'
  ];

  userAnswers: string[] = [];

  correctAnswers: string[]= ['has played','have written',"has not talked"]; // Respuestas correctas

  onAnswerChange(index: number, value: string) {
    this.userAnswers[index] = value;
  }

  checkAnswer(index: number): boolean {
    return this.userAnswers[index] === this.correctAnswers[index];
  }

}
