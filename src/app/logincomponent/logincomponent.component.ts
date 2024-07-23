import { Component } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {LoginService} from "../_services/login.service";
import {Router} from "@angular/router";
import {Usuario} from "../_model/usuario";

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrl: './logincomponent.component.css'
})
export class LogincomponentComponent {

  usuarioinvalido:boolean=false;

  constructor(readonly formbuilder:FormBuilder,readonly loginService:LoginService,
             private  router:Router) {

  }

  formulario=this.formbuilder.group({
    usuario: new  FormControl<string | undefined>(undefined,[Validators.required, Validators.minLength(1)]),
    contrasenia: new  FormControl<string | undefined>('',[Validators.required, Validators.minLength(1)])
  })


  validateUser(){
    this.formulario.markAsTouched();
    if(this.formulario.invalid){

      return;
    }

  this.loginService.login(this.formulario.controls.usuario.value ,
      this.formulario.controls.contrasenia.value ).subscribe(
          respuesta=>{

            this.usuarioinvalido=respuesta==undefined;

            if(respuesta){
              localStorage.setItem("datosUsuario",JSON.stringify(respuesta.datosUsuario));
              this.router.navigate(["tr","home"])
            }

          }
  )


  }

}
