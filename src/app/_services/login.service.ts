import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../_model/usuario";
import {Observable, of} from "rxjs";

@Injectable({providedIn:"root"})
export class LoginService{

    listausuarios:Usuario[]=[];

    constructor(private httclient:HttpClient) {

        this.obtenerTodosUsuarios().subscribe(
            lista=>{
                this.listausuarios=lista;
            }
        )
    }

    obtenerTodosUsuarios(){
       return  this.httclient.get<Usuario[]>("./assets/datosfake/usuarios.json");
    }

    login(usuario:string | null | undefined,contrasenia:string | null | undefined): Observable<Usuario | undefined>{
       const usuarioEncontrado=  this.listausuarios.find(x=>x.usuario==usuario  && x.contrasenia== contrasenia);
       if(usuarioEncontrado){
           return  of(usuarioEncontrado);
       }
       return of(undefined);
    }

    isLoged(){
        return  localStorage.getItem("datosUsuario")!=undefined;
    }

    logout(){
        localStorage.clear();
    }
}