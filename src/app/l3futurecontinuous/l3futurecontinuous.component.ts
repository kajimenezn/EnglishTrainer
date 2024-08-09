import { Component } from '@angular/core';

@Component({
  selector: 'app-l3futurecontinuous',
  templateUrl: './l3futurecontinuous.component.html',
  styleUrl: './l3futurecontinuous.component.css'
})
export class L3futurecontinuousComponent {
  futurecontinuousstructure = [
    { structure: 'S + will be + V(ing form) + C. ',form:'Affirmative with will', example: 'He will be talking in the workshop.' },
    { structure: 'S + (is/are) + going to be + V(ing form) + C. ',form:'Affirmative with going to', example: 'He is going to be talking in the workshop.' },
    { structure: 'S + will not be + V(ing form)  ',form:'Negative with will', example: "He will not be talking in the workshop."},
    { structure: 'S + (is/are) not +going to be + V(ing form)  ',form:'Negative with going to', example: "He is not going to be talking in the workshop."},
    { structure: 'Will + subject + V(ing form)+ c + ? ',form:'Question with will', example: 'Will he be talking in the workshop?' },
    { structure: '(Is/Are) + subject + (going to be)+ V(ing form)+ c + ? ',form:'Question with going to', example: 'Is he going to be talking in the workshop?' },
    { structure: 'Yes, + S + will. / Yes + S + going to be.',form:'Affirmative Answer', example: 'Yes, he will. / Yes, he is going to be.' },
    { structure: 'No, + S + will not. / No, + S + (is/are)+ not + going to be',form:'Negative Answer', example: "No, he will not. / No, he is not going to be." },
  ];

//Jumbled sentences
  sentences = [
    { words: ['not', 'Pol', 'was','his', 'homework', 'doing'], correct: 'Pol was not doing his homework.' },
    { words: ['was', 'studying', 'when', 'she', 'the', 'last', 'night','he', 'arrived'], correct: 'She was studying the last night when he arrived.' },
    { words: ['were', 'the', 'students', 'playing', 'soccer', 'the', 'whole', 'afternoon'], correct: 'The students were playing soccer the whole afternoon.' }
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


