import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './pages/login/login.component';
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import {AppRoutingModule} from "./app-routing.module";
import { LandingComponent } from './pages/landing/landing.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { NotificationCardComponent } from './shared/notification-card/notification-card.component';
import { TeamCardComponent } from './shared/team-card/team-card.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SkillsComponent } from './pages/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    HomePageComponent,
    SignUpComponent,
    NotificationCardComponent,
    TeamCardComponent,
    ChatComponent,
    ProfileComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    RouterLink,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
