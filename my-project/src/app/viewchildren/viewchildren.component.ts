import { Component } from '@angular/core';

@Component({
  selector: 'app-viewchildren',
  templateUrl: './viewchildren.component.html',
  styleUrls: ['./viewchildren.component.css']
})
export class ViewchildrenComponent {
  num1: number = 32;
  num2: number = 19;
  result: number = 0;
  add() {
  this.result = this.num1 + this.num2;
  return this.result;
  }

  substract() {
    this.result = this.num1 - this.num2;
    return this.result
  }
}
