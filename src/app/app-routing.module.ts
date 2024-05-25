import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormulariotestComponent} from "./formulariotest/formulariotest.component";

const routes: Routes = [
  {
    path:"test", component: FormulariotestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
