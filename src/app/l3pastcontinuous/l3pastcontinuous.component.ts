import { Component } from '@angular/core';

@Component({
  selector: 'app-l3pastcontinuous',
  templateUrl: './l3pastcontinuous.component.html',
  styleUrl: './l3pastcontinuous.component.css'
})
export class L3pastcontinuousComponent {
  pastcontinuousstructure = [
    { structure: 'S + Vto be (in past) + V(ing form) + C. ',form:'Affirmative', example: 'He was writing an essay when Paul arrived. / They were singing until the club closed.' },
    { structure: 'S + Vto be (in past) + not + V(ing form) + C.  ',form:'Negative', example: "He was not writing an essay when Paul arrived. / They were not singing in the club."},
    { structure: 'Vto be (in past) + subject + v(ing form) +  c + ? ',form:'Question', example: 'Was he not writing an essay when Paul arrived? / Were they not singing in the club?' },
    { structure: 'Yes, + S + Vto be (in past). ',form:'Affirmative Answer', example: 'Yes, he was. / Yes, they were.' },
    { structure: 'No, + S + Vto be (in past) + not.',form:'Negative Answer', example: "No, he was not. / No, they were not." },
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

