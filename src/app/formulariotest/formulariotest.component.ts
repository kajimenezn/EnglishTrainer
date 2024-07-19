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
}
