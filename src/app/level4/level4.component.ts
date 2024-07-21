import { Component } from '@angular/core';

@Component({
  selector: 'app-level4',
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.css']
})

export class Level4Component {

    exercises: any[] = [
        { sentence: 'The cat is fluffy.', scrambledAdjective: 'fluffy' },
        { sentence: 'She has a big house.', scrambledAdjective: 'big' },
        { sentence: 'He is a smart student.', scrambledAdjective: 'smart' },
        { sentence: 'The flowers are beautiful.', scrambledAdjective: 'beautiful' },
        { sentence: 'It was a long journey.', scrambledAdjective: 'long' }
        // Añade más ejemplos aquí si lo deseas
    ];

    currentExerciseIndex: number = 0;
    userAnswer: string = '';
    feedbackMessage: string = '';
    scrambledAdjective: any;
    sentence: any;

    constructor() {
        this.loadExercise(this.currentExerciseIndex);
    }

    // Método para cargar un ejercicio específico
    loadExercise(index: number) {
        this.userAnswer = '';
        this.feedbackMessage = '';
        const exercise = this.exercises[index];
        this.sentence = exercise.sentence;
        this.scrambledAdjective = exercise.scrambledAdjective;
    }

    // Método para verificar la respuesta del usuario
    checkAnswer() {
        const correctAdjective = this.exercises[this.currentExerciseIndex].scrambledAdjective;
        if (this.userAnswer.trim().toLowerCase() === correctAdjective) {
            this.feedbackMessage = 'Correct!';
        } else {
            this.feedbackMessage = 'Incorrect. Try again.';
        }
    }

    // Método para cargar el siguiente ejercicio
    nextExercise() {
        this.currentExerciseIndex++;
        if (this.currentExerciseIndex < this.exercises.length) {
            this.loadExercise(this.currentExerciseIndex);
        } else {
            this.feedbackMessage = 'No more exercises.';
        }
    }

}

