import { Component } from '@angular/core';

@Component({
  selector: 'app-l3futurecontinuous',
  templateUrl: './l3futurecontinuous.component.html',
  styleUrl: './l3futurecontinuous.component.css'
})
export class L3futurecontinuousComponent {
  futurecontinuousstructure = [
    { structure: 'S + will be + V(ing form) + C. ',form:'Affirmative', example: 'He will be talking in the workshop.' },
    { structure: 'S + will not be + V(ing form) + c.  ',form:'Negative', example: "He will not be talking in the workshop."},
    { structure: 'Will + subject + V(ing form)+ c + ? ',form:'Question', example: 'Will he be talking in the workshop?' },
    { structure: 'Yes, + S + will.',form:'Affirmative Answer', example: "Yes, he will." },
    { structure: 'No, + S + will + not.',form:'Negative Answer', example: "No, he will not." },
  ];

//Jumbled sentences
  sentences = [
    { words: ['from', 'They', 'Cuba','will be', 'this', 'arriving','Saturday'], correct: 'They will be arriving from Cuba this Saturday.' },
    { words: ['will be', 'working', 'project', 'She', 'final', 'on','her'], correct: 'She will be working on her final project.' },
    { words: ['You', 'for', 'will be', 'exposition', 'the','preparing'], correct: 'You will be preparing for the exposition.' }
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


