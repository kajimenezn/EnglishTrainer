import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import {NgScrollbarModule} from "ngx-scrollbar";
import { FormulariotestComponent } from './formulariotest/formulariotest.component';
import { QuestionsComponent } from './questions/questions.component';
import { BannerComponent } from './banner/banner.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { HomeComponent } from './home/home.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { FollowusComponent } from './followus/followus.component';
import {SideNoMenuComponent} from "./sidemenu-nomenu/sidemenu-nomenui.component";
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';
import { Level3Component } from './level3/level3.component';
import { Level4Component } from './level4/level4.component';
import {MissionComponent} from './mision/mission.component';
import { ObjectivesComponent } from './objectives/objectives.component';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
//import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
      SideNoMenuComponent,
    FormulariotestComponent,
    QuestionsComponent,
    BannerComponent,
    LogincomponentComponent,
    HomeComponent,
    ContactanosComponent,
    FollowusComponent,
    Level1Component,
    Level2Component,
    Level3Component,
    Level4Component,
    MissionComponent,
    ObjectivesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgScrollbarModule,
    NgOptimizedImage,
    FormsModule
  ],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ], // Add this line
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
