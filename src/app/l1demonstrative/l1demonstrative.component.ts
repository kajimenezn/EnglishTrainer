import { Component } from '@angular/core';

@Component({
  selector: 'app-l1demonstrative',
  templateUrl: './l1demonstrative.component.html',
  styleUrls: [`./l1demonstrative.component.css`]
})
export class L1demonstrativeComponent {
  sentences: string[] = [
    '__________ is my book.',
    'I need __________ pencil.'
  ];

  pronouns: string[] = ['This', 'that', 'these', 'those'];

  userAnswers: string[] = [];

  correctAnswers: string[] = ['This' , 'that']; // Respuestas correctas

  onAnswerChange(index: number, value: string) {
    this.userAnswers[index] = value;
  }

  checkAnswer(index: number): boolean {
    return this.userAnswers[index] === this.correctAnswers[index];
  }

  singularDemonstrative = [
    { sentence: 'This is my friend.', pronoun: 'This' },
    { sentence: 'That eraser is mine.', pronoun: 'That' }
  ];

  pluralDemonstrative = [
    { sentence: 'These are my pencils.', pronoun: 'These' },
    { sentence: 'Those are your rings.', pronoun: 'Those' }
  ];
}

