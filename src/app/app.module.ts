import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';

NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule // Add FormsModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}