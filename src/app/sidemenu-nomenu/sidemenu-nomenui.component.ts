import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu-nomenu.component.html',
  styleUrl: './sidemenu-nomenu.component.css'
})
export class SideNoMenuComponent {
  isSideMenuOpen: boolean = true;


  toggleSideMenu() {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }
}
