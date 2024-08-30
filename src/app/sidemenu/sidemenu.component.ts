import { Component } from '@angular/core';
import {LoginService} from "../_services/login.service";
import {Router} from "@angular/router";
import {DatosUsuario} from "../_model/usuario";
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  strusuario=localStorage.getItem("datosUsuario");
  usuario:DatosUsuario;

  isSideMenuOpen: boolean = true;

  textoBusqueda="";

  cargarBusqueda(){
    console.log("cargar busqeuda");
    this.busquedaService.bsTextoBusqueda.next(this.textoBusqueda);
    this.router.navigateByUrl("tr/busqueda");
  }

  constructor(readonly loginService: LoginService, private router: Router, readonly busquedaService: SearchService) {
    this.usuario=JSON.parse(this.strusuario as string);
  }

  toggleSideMenu() {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['tr','home'])
  }

  gotoUserInformation(){
    this.router.navigate(['tr','userinformation'])
  }
}
