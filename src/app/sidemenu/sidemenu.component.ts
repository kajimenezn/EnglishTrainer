import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  isSideMenuOpen: boolean = true;

  toggleSideMenu() {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }
}
