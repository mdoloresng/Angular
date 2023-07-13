import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { DrowpdownListComponent } from './drowpdown-list/drowpdown-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent,
    DrowpdownListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
