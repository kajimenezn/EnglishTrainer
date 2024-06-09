import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormulariotestComponent} from "./formulariotest/formulariotest.component";
import {LogincomponentComponent} from "./logincomponent/logincomponent.component";
import {HomeComponent} from "./home/home.component";
import {ContactanosComponent} from "./contactanos/contactanos.component";
import {FollowusComponent} from "./followus/followus.component";

const routes: Routes = [
  {
    path:"formulariotest", component: FormulariotestComponent
  },
  {
    path:"login", component: LogincomponentComponent
  },
  {
    path:"home", component: HomeComponent
  },
  {
    path:"contactus", component: ContactanosComponent
  },
  {
    path:"followus", component: FollowusComponent
  },

  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
