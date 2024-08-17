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
import {MissionComponent} from './mision/mission.component';
import { ObjectivesComponent } from './objectives/objectives.component';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { L1pronounsComponent } from './l1pronouns/l1pronouns.component';
import { L1adjectivesComponent } from './l1adjectives/l1adjectives.component';

import {provideHttpClient} from "@angular/common/http";
import { L1nounsComponent } from './l1nouns/l1nouns.component';
import { L1demonstrativeComponent } from './l1demonstrative/l1demonstrative.component';
import { L2presentsimpleComponent } from './l2presentsimple/l2presentsimple.component';
import { L2pastsimpleComponent } from './l2pastsimple/l2pastsimple.component';
import { L2futuresimpleComponent } from './l2futuresimple/l2futuresimple.component';
import { L3presentcontinuousComponent } from './l3presentcontinuous/l3presentcontinuous.component';
import { L3pastcontinuousComponent } from './l3pastcontinuous/l3pastcontinuous.component';
import { L3futurecontinuousComponent } from './l3futurecontinuous/l3futurecontinuous.component';
import { L4presentperfectComponent } from './l4presentperfect/l4presentperfect.component';
import { L4pastperfectComponent } from './l4pastperfect/l4pastperfect.component';
import { ChatComponent } from './chat/chat.component';
import { UserinformationComponent } from './userinformation/userinformation.component';
import { VerbsComponent } from './verbs/verbs.component';
import { AboutusComponent } from './aboutus/aboutus.component';


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
    MissionComponent,
    ObjectivesComponent,
    L1pronounsComponent,
    L1adjectivesComponent,
    L1nounsComponent,
    L1demonstrativeComponent,
    L2presentsimpleComponent,
    L2pastsimpleComponent,
    L2futuresimpleComponent,
    L3presentcontinuousComponent,
    L3pastcontinuousComponent,
    L3futurecontinuousComponent,
    L4presentperfectComponent,
    L4pastperfectComponent,
    ChatComponent,
    UserinformationComponent,
    VerbsComponent,
    AboutusComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgScrollbarModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule
  ],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ], // Add this line
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
