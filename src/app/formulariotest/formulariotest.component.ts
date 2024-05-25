import {Component} from '@angular/core';
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
            descripcion: "How can you improve your English?",
            detalle: '',
            opcionesRespuesta: [{descripcion: 'Eating'}, {descripcion: 'Listening poadcasts'}, {descripcion: 'Studying only grammar'}]
        }]
}
