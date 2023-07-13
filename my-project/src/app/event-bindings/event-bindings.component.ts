import { Component } from '@angular/core';

@Component({
  selector: 'app-event-bindings',
  templateUrl: './event-bindings.component.html',
  styleUrls: ['./event-bindings.component.css']
})
export class EventBindingsComponent {
  name: string = 'Maria Herrador'
AlertOnClick() {
  alert(`I am a bound button created by ${this.name}`);
}
}
