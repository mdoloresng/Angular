import { Component, ElementRef, ViewChild } from '@angular/core';
import { ViewchildrenComponent } from './viewchildren/viewchildren.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //"child" can be anyname. It is the name of the reference to our ViewChildrenComponent
  @ViewChild(ViewchildrenComponent, {static: true}) child?:ViewchildrenComponent;

  //Reference to the ElmentRef button in the template
  @ViewChild('button', {static: true}) buttonRef?: ElementRef<HTMLButtonElement>
 
  add() {
    this.child?.add();
  }
  substract() {
    this.child?.substract();
  }

//Access fields of a child from the parent (brute force)
 /*  @ViewChild(ViewchildrenComponent, {static: true}) 
  patata?:ViewchildrenComponent  
  
  increment() {
    this.patata?.increment();
  }
  decrement() {
    this.patata?.decrement();
  } */
}
