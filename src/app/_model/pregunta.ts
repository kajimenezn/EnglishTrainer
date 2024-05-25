import {Opcion} from "./opciones";

export interface Pregunta{
    descripcion:string;
    detalle:string;
    opcionesRespuesta:Opcion[];

}
