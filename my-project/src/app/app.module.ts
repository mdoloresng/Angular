import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ViewchildrenComponent } from './viewchildren/viewchildren.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewchildrenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
