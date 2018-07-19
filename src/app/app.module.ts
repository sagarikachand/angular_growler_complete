import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
// Imports for loading & configuring the in-memory web api




import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

import { SharedModule } from './shared/shared.module';


/* Feature Modules */


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent
   
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
