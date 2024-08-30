import { Component } from '@angular/core';
import {SearchService} from "../_services/search.service";
import {LinkLesson} from "../_model/busqueda";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {

  resultado: LinkLesson[]=[];
  textoBusqueda: string="";

  constructor(private searchservice:SearchService) {

  }

  ngOnInit(): void {
    this.searchservice.bsTextoBusqueda.subscribe(texto=>{
      if(texto.length>0){
        this.textoBusqueda= texto;
        this.buscar();
      }
    })
  }

  buscar(){
    console.log("Busqueda", this.textoBusqueda);
    this.resultado= this.searchservice.buscartexto(this.textoBusqueda);
  }



}
