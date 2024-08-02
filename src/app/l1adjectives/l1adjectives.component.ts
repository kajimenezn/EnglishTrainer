import { Component } from '@angular/core';

@Component({
  selector: 'app-l1adjectives',
  templateUrl: './l1adjectives.component.html',
  styleUrls: ['./l1adjectives.component.css']
})

export class L1adjectivesComponent {

  exercises: any[] = [
    { sentence: 'The cat is cute.', scrambledAdjective: 'cute' },
    { sentence: 'She has a big house.', scrambledAdjective: 'big' },
    { sentence: 'He is a smart student.', scrambledAdjective: 'smart' },
    { sentence: 'The flowers are beautiful.', scrambledAdjective: 'beautiful' },
    { sentence: 'It was a long journey.', scrambledAdjective: 'long' }

  ];

  currentExerciseIndex: number = 0;
  userAnswer: string = '';
  feedbackMessage: string = '';
  scrambledAdjective: any;
  sentence: any;

  constructor() {
    this.loadExercise(this.currentExerciseIndex);
  }

  // Method for the specific exercise
  loadExercise(index: number) {
    this.userAnswer = '';
    this.feedbackMessage = '';
    const exercise = this.exercises[index];
    this.sentence = exercise.sentence;
    this.scrambledAdjective = exercise.scrambledAdjective;
  }

  // Method to verify the answer
  checkAnswer() {
    const correctAdjective = this.exercises[this.currentExerciseIndex].scrambledAdjective;
    if (this.userAnswer.trim().toLowerCase() === correctAdjective) {
      this.feedbackMessage = 'Correct!';
    } else {
      this.feedbackMessage = 'Incorrect. Try again.';
    }
  }

  // Method for the next exercise
  nextExercise() {
    this.currentExerciseIndex++;
    if (this.currentExerciseIndex < this.exercises.length) {
      this.loadExercise(this.currentExerciseIndex);
    } else {
      this.feedbackMessage = 'No more exercises.';
    }
  }

  predicativeAdjectives = [
    { sentence: 'The student is smart.', adjective: 'Smart' },
    { sentence: 'The employee is dedicated.', adjective: 'Dedicated' }
  ];

  attributiveAdjectives = [
    { sentence: 'The smart student is taking the exam.', adjective: 'Smart' },
    { sentence: 'The dedicated employee starts early at work.', adjective: 'Dedicated' }
  ];

}

