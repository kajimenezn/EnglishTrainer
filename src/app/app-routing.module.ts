import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormulariotestComponent} from "./formulariotest/formulariotest.component";
import {LogincomponentComponent} from "./logincomponent/logincomponent.component";
import {HomeComponent} from "./home/home.component";
import {ContactanosComponent} from "./contactanos/contactanos.component";
import {FollowusComponent} from "./followus/followus.component";
import {SidemenuComponent} from "./sidemenu/sidemenu.component";
import {SideNoMenuComponent} from "./sidemenu-nomenu/sidemenu-nomenui.component";
import {Level2Component} from "./level2/level2.component";
import {Level3Component} from "./level3/level3.component";
import {Level4Component} from "./level4/level4.component";
import {MissionComponent} from "./mision/mission.component";
import {ObjectivesComponent} from "./objectives/objectives.component";
import {L1pronounsComponent} from "./l1pronouns/l1pronouns.component";
import {AuthGuard} from "./_services/auth.guard";

const routesWithMenu: Routes = [
  {
    path:"formulariotest", component: FormulariotestComponent
  },

  {
    path:"home", component: HomeComponent
  },
  {
    path:"mision", component: MissionComponent
  },
  {
    path:"objectives", component: ObjectivesComponent
  },
  {
    path:"contactus", component: ContactanosComponent
  },
  {
    path:"followus", component: FollowusComponent
  },



];

const coursesMenu:  Routes= [
  {
    path:"l1pronouns", component: L1pronounsComponent
  },
  {
    path:"level2", component: Level2Component
  },
  {
    path:"level3", component: Level3Component
  },
  {
    path:"level4", component: Level4Component
  },

]

const routesNoMenu: Routes= [
  {
    path:"login", component: LogincomponentComponent
  },
]

const globalRoutes: Routes = [

  {path: 'courses', component: SidemenuComponent, children: coursesMenu, canActivate:[AuthGuard ]},
  {path: 'tr', component: SidemenuComponent, children: routesWithMenu },
  {path: 'nomenu', component: SideNoMenuComponent,  children: routesNoMenu},
  {path: '', redirectTo: 'tr/home', pathMatch: 'full'},
  {path: '**',component: HomeComponent  }
]

@NgModule({
  imports: [RouterModule.forRoot(globalRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
