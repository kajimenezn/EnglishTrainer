import { Component } from '@angular/core';

@Component({
  selector: 'app-l4pastperfect',
  templateUrl: './l4pastperfect.component.html',
  styleUrl: './l4pastperfect.component.css'
})
export class L4pastperfectComponent {
  pastperfectstructure = [
    { structure: 'S + had + V(past participle) + C. ',form:'Affirmative', example: 'Rachel had saved the document before the computer crashed.' },
    { structure: 'S + had + not + V(past participle) + c.  ',form:'Negative', example: "Rachel had not saved the document before the computer crashed."},
    { structure: 'Had + Rachel + V(past participle)+ c + ? ',form:'Question', example: 'Had Rachel saved the document before the computer crashed?' },
    { structure: 'Yes, + S + had.',form:'Affirmative Answer', example: "Yes, Rachel had." },
    { structure: 'No, + S + had + not.',form:'Negative Answer', example: "No, Rachel had not." },
  ];

//Jumbled sentences
  sentences = [
    { words: ['students', 'seen', 'We','before', 'had', 'arrived','they'], correct: 'We had seen the students before they arrived.' },
    { words: ['prepared', 'He', 'dinner', 'because', 'he', 'exam','had', 'the','passed', 'a'], correct: 'He had prepared a dinner because he passed the exam.' },
    { words: ['airport', 'The', 'airplane', 'had', 'taken off', 'arrived', 'she','at','the','when' ], correct: 'The airplane had taken off when she arrived at the airport.' }
  ];

  currentSentenceIndex = 0; // Index of the actual sentence
  userAnswer: string = '';
  feedback: string = '';

  get currentSentence() {

    return this.sentences[this.currentSentenceIndex];
  }

  checkAnswer() {
    const formattedAnswer = this.userAnswer.trim().toLowerCase();
    const formattedCorrectAnswer = this.currentSentence.correct.toLowerCase();

    if (formattedAnswer === formattedCorrectAnswer) {
      this.feedback = '¡Correct! Well done.';
    } else {
      this.feedback = 'Try again. The correct sentence is: ' + this.currentSentence.correct;
    }
  }

  clearAnswer() {
    this.userAnswer = '';
    this.feedback = '';
  }

  nextSentence() {
    if (this.currentSentenceIndex < this.sentences.length - 1) {
      this.currentSentenceIndex++;
      this.clearAnswer();
    } else {
      this.feedback = '¡You completed the sentences.!';
    }
  }

  previousSentence() {
    if (this.currentSentenceIndex > 0) {
      this.currentSentenceIndex--;
      this.clearAnswer();
    }
  }
}


