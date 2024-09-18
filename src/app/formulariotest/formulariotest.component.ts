/*import {Component} from '@angular/core';
import {Pregunta} from "../_model/pregunta";

@Component({
    selector: 'app-formulariotest',
    templateUrl: './formulariotest.component.html',
    styleUrl: './formulariotest.component.css'
})
export class FormulariotestComponent {
    listapreguntas: Pregunta[] = [
        {
            descripcion: "How many skills do the English language have?",
            detalle: '',
            opcionesRespuesta: [{descripcion: '1'}, {descripcion: '2'}, {descripcion: '3'}]

        },
        {
            descripcion: "Why is important the English language?",
            detalle: '',
            opcionesRespuesta: [{descripcion: 'to get a new job'}, {descripcion: 'to change the position'}, {descripcion: 'to travel'}]
        },
        {
            descripcion: "How do you feel when you use the English language?",
            detalle: '',
            opcionesRespuesta: [{descripcion: 'angry'}, {descripcion: 'happy'}, {descripcion: 'comfortable'}]

        },
        {
            descripcion: "How often do you watch videos or movies in English?",
            detalle: '',
            opcionesRespuesta: [{descripcion: 'Never'}, {descripcion: 'Always'}, {descripcion: 'Sometimes'}]
        },
        {
            descripcion: "What are some tools usually used to improve your English skills?",
            detalle: '',
            opcionesRespuesta: [{descripcion: 'apps'}, {descripcion: 'music'}, {descripcion: 'websites'}]

        },
        {
            descripcion: "How long have you been studying English?",
            detalle: '',
            opcionesRespuesta: [{descripcion: '3 years'}, {descripcion: '5 years'}, {descripcion: 'more than 6'}]
        },
        {
            descripcion: "What is another resource to learn English?",
            detalle: '',
            opcionesRespuesta: [{descripcion: 'Eating'}, {descripcion: 'Listening poadcasts'}, {descripcion: 'Studying only grammar'}]
        }]
}*/
import { Component } from '@angular/core';
import { Pregunta } from "../_model/pregunta";
import Swal from "sweetalert2";

@Component({
    selector: 'app-formulariotest',
    templateUrl: './formulariotest.component.html',
    styleUrls: ['./formulariotest.component.css']
})
export class FormulariotestComponent {
    listapreguntas: Pregunta[] = [
        {
            descripcion: "Jack and Matt________________the house",
            detalle: '',
            opcionesRespuesta: [{ descripcion: 'is cleaning' }, { descripcion: 'are clean' }, { descripcion: 'are cleaning' }],
            respuestaCorrecta: 'are cleaning'
        },
        {
            descripcion: "Sara__________English.",
            detalle: '',
            opcionesRespuesta: [{ descripcion: 'like' }, { descripcion: 'likes' }, { descripcion: 'liking' }],
            respuestaCorrecta: 'likes'
        },
        {
            descripcion: "Layla is___________ her cat to the vet.",
            detalle: '',
            opcionesRespuesta: [{ descripcion: 'takes' }, { descripcion: 'taking' }, { descripcion: 'took' }],
            respuestaCorrecta: 'taking'
        },
        {
            descripcion: "We are__________ tennis.",
            detalle: '',
            opcionesRespuesta: [{ descripcion: 'learning' }, { descripcion: 'learn' }, { descripcion: 'learned' }],
            respuestaCorrecta: 'learning'
        },
        {
            descripcion: "My friends are_________ human beings.",
            detalle: '',
            opcionesRespuesta: [{ descripcion: 'god' }, { descripcion: 'good' }, { descripcion: 'best' }],
            respuestaCorrecta: 'good'
        },
        {
            descripcion: "Jack has__________in Colombia.",
            detalle: '',
            opcionesRespuesta: [{ descripcion: 'been' }, { descripcion: 'gone' }, { descripcion: 'going' }],
            respuestaCorrecta: 'been'
        },
        {
            descripcion: "Yesterday, I _________at the park.",
            detalle: '',
            opcionesRespuesta: [{ descripcion: 'am' }, { descripcion: 'was' }, { descripcion: 'are' }],
            respuestaCorrecta: 'was'
        },
        {
            descripcion: "__________you like the movie you watched last Friday?",
            detalle: '',
            opcionesRespuesta: [{ descripcion: 'Do' }, { descripcion: 'Are' }, { descripcion: 'Did' }],
            respuestaCorrecta: 'Did'
        },
        {
            descripcion: "Patrick ________Maths for the exam.",
            detalle: '',
            opcionesRespuesta: [{ descripcion: 'will studies' }, { descripcion: 'will study' }, { descripcion: 'will studying' }],
            respuestaCorrecta: 'will study'
        },
        {
            descripcion: "______you help me?",
            detalle: '',
            opcionesRespuesta: [{ descripcion: 'Might' }, { descripcion: 'Are' }, { descripcion: 'Will' }],
            respuestaCorrecta: 'Will'
        }
    ];

    userAnswers: { [key: number]: string } = {};
    level: string | null = null;

    submitTest() {
        // Contar respuestas correctas
        const correctAnswersCount = this.listapreguntas.reduce((count, pregunta, index) => {
            return count + (this.userAnswers[index] === pregunta.respuestaCorrecta ? 1 : 0);
        }, 0);

        console.log("Respuestas correctas",correctAnswersCount);

        /*Swal.fire({
            title: "Good job!",
            text: "Your level is!",
            icon: "success"
        });*/

        // Determinar el nivel basado en las respuestas correctas
        if (correctAnswersCount >=1 && correctAnswersCount<=3) {
            /*this.level = 'Nivel 1';*/
            Swal.fire({
                title: "Good job!",
                text: 'Level 1',
                icon: "success"
            });
            console.log('hola');
        } else if (correctAnswersCount >=4 && correctAnswersCount<=6) {
            /*this.level = 'Nivel 2'; // Puedes ajustar o agregar otros niveles según sea necesario*/
            Swal.fire({
                title: "Good job!",
                text: 'Level 2',
                icon: "success"
            });
        }
        else if (correctAnswersCount >=7 && correctAnswersCount<=9) {
            /*this.level = 'Nivel 2'; // Puedes ajustar o agregar otros niveles según sea necesario*/
            Swal.fire({
                title: "Good job!",
                text: 'Level 3',
                icon: "success"
            });
        }

        else if (correctAnswersCount >=10) {
            /*this.level = 'Nivel 2'; // Puedes ajustar o agregar otros niveles según sea necesario*/
            Swal.fire({
                title: "Good job!",
                text: 'Level 4',
                icon: "success"
            });
        }

        // Aquí no mostramos las respuestas correctas, solo el nivel
        console.log(`Nivel: ${this.level}`); // Solo para propósitos de depuración
    }
}
