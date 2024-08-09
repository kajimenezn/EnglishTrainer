import { Component } from '@angular/core';

@Component({
  selector: 'app-l2pastsimple',
  templateUrl: './l2pastsimple.component.html',
  styleUrls: ['./l2pastsimple.component.css']
})
export class L2pastsimpleComponent {
  pastsimplestructure = [
    { structure: 'S + Verb(in the past) + C. ',form:'Affirmative', example: 'I made the bed. / He studied for the exam.' },
    { structure: 'S + Aux (did) + not+ verb(normal form) + C. ',form:'Negative', example: "I didn't make the bed . / He didn't study for the exam."},
    { structure: 'Aux(Did) + subject + verb(normal form) + c ? ',form:'Question', example: 'Did you make the bed? / Did he study for the exam?' },
    { structure: 'Yes, + S + Aux (did). ',form:'Affirmative Answer', example: 'Yes, I did. / Yes, he did.' },
    { structure: 'No, + S + Aux (did) + not.',form:'Negative Answer', example: "No, I didn't. / No, he didn't." },
  ];

  sentences: string[] = [

    'Lucy __________  to the concert the last Friday.',
    "We __________ the cake for Paula's birthday yesterday.",
    "He __________ the vegetables the last week."
  ];

  words = [
    '1. Listen',
    '2. Bring',
    '3. Buy (negative)'
  ];

  userAnswers: string[] = [];

  correctAnswers: string[]= ['listened','brought',"didn't buy"]; // Respuestas correctas

  onAnswerChange(index: number, value: string) {
    this.userAnswers[index] = value;
  }

  checkAnswer(index: number): boolean {
    return this.userAnswers[index] === this.correctAnswers[index];
  }

}

