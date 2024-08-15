import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormulariotestComponent} from "./formulariotest/formulariotest.component";
import {LogincomponentComponent} from "./logincomponent/logincomponent.component";
import {HomeComponent} from "./home/home.component";
import {ContactanosComponent} from "./contactanos/contactanos.component";
import {FollowusComponent} from "./followus/followus.component";
import {SidemenuComponent} from "./sidemenu/sidemenu.component";
import {SideNoMenuComponent} from "./sidemenu-nomenu/sidemenu-nomenui.component";
import {MissionComponent} from "./mision/mission.component";
import {ObjectivesComponent} from "./objectives/objectives.component";
import {L1adjectivesComponent} from "./l1adjectives/l1adjectives.component";
import {L1pronounsComponent} from "./l1pronouns/l1pronouns.component";
import {L1nounsComponent} from "./l1nouns/l1nouns.component";
import {AuthGuard} from "./_services/auth.guard";
import {L1demonstrativeComponent} from "./l1demonstrative/l1demonstrative.component";
import {L2presentsimpleComponent} from "./l2presentsimple/l2presentsimple.component";
import {L2pastsimpleComponent} from "./l2pastsimple/l2pastsimple.component";
import {L2futuresimpleComponent} from "./l2futuresimple/l2futuresimple.component";
import {L3presentcontinuousComponent} from "./l3presentcontinuous/l3presentcontinuous.component";
import {L3pastcontinuousComponent} from "./l3pastcontinuous/l3pastcontinuous.component";
import {L3futurecontinuousComponent} from "./l3futurecontinuous/l3futurecontinuous.component";
import {L4presentperfectComponent} from "./l4presentperfect/l4presentperfect.component";
import {L4pastperfectComponent} from "./l4pastperfect/l4pastperfect.component";
import {ChatComponent} from "./chat/chat.component";
import {UserinformationComponent} from "./userinformation/userinformation.component";

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
  {
    path:"chat", component: ChatComponent
  },
  {
    path:"userinformation", component: UserinformationComponent
  },

];

const coursesMenu:  Routes= [
  {
    path:"l1pronouns", component: L1pronounsComponent
  },
  {
    path:"l1adjectives", component: L1adjectivesComponent
  },
  {
    path:"l1nouns", component: L1nounsComponent
  },
  {
    path:"l1demonstrative", component: L1demonstrativeComponent
  },
  {
    path:"l2presentsimple", component: L2presentsimpleComponent
  },
  {
    path:"l2pastsimple", component: L2pastsimpleComponent
  },
  {
    path:"l2futuresimple", component: L2futuresimpleComponent
  },
  {
    path:"l3presentcontinuous", component: L3presentcontinuousComponent
  },
  {
    path:"l3pastcontinuous", component: L3pastcontinuousComponent
  },
  {
    path:"l3futurecontinuous", component: L3futurecontinuousComponent
  },
  {
    path:"l4presentperfect", component: L4presentperfectComponent
  },
  {
    path:"l4pastperfect", component: L4pastperfectComponent
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
