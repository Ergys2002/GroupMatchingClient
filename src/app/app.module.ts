import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthI,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
