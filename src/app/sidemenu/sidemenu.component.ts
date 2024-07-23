import { Component } from '@angular/core';
import {LoginService} from "../_services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  isSideMenuOpen: boolean = true;

  constructor(readonly loginService: LoginService, private router: Router) {
  }

  toggleSideMenu() {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['tr','home'])
  }
}
