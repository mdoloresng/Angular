import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstSelectorComponent } from './first-selector/first-selector.component';
import { SecondSelectorComponent } from './second-selector/second-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstSelectorComponent,
    SecondSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
