import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TutorialComponent } from './tutorial.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
