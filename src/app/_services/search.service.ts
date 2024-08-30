import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Busqueda, LinkLesson} from "../_model/busqueda";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn:"root"})
export class SearchService{

    listabusquedas:Busqueda[]=[];

    bsTextoBusqueda= new BehaviorSubject<string>("");

    constructor(private httclient:HttpClient) {
        this.cargarbusqueda().subscribe(lista=>{
            console.log("cargarbusqueda",lista)
            this.listabusquedas=lista;
        });


    }
    cargarbusqueda(){
        return  this.httclient.get<Busqueda[]>("./assets/datosfake/busquedaniveles.json");
    }

    buscartexto(texto: string): LinkLesson[] {
        
        return this.listabusquedas
            .filter(x => x.keyword.some(y => y.includes(texto)))
            .flatMap(x => x.link_lessons);
    }
}

