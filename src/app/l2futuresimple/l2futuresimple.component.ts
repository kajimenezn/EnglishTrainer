import { Component } from '@angular/core';

@Component({
  selector: 'app-l2futuresimple',
  templateUrl: './l2futuresimple.component.html',
  styleUrl: './l2futuresimple.component.css'
})
export class L2futuresimpleComponent {
  futuresimplestructure = [
    { structure: 'S + will + verb + C. ',form:'Affirmative', example: 'I will take the tickets. / She will prepare tea for us.' },
    { structure: 'S + will + not+ verb + C. ',form:'Negative', example: "I will not take the tickets. / She will not prepare tea for us."},
    { structure: 'Will + subject + verb + c ? ',form:'Question', example: 'Will I take the tickets? / Will she prepare the tea for us?' },
    { structure: 'Yes, + S + will. ',form:'Affirmative Answer', example: 'Yes, I will. / Yes, she will.' },
    { structure: 'No, + S + will + not.',form:'Negative Answer', example: "Yes, I will not. / No, she will not." },
  ];

  sentences: string[] = [

    'He __________ lasagna tonight.',
    "You __________ this saturday.",
    "Preston __________ the guitar the next week ."
  ];

  words = [
    '1. Cook',
    '2. Arrive',
    '3. Play (negative)'
  ];

  userAnswers: string[] = [];

  correctAnswers: string[]= ['will cook','will arrive','will not play']; // Respuestas correctas

  onAnswerChange(index: number, value: string) {
    this.userAnswers[index] = value;
  }

  checkAnswer(index: number): boolean {
    return this.userAnswers[index] === this.correctAnswers[index];
  }

}

