import { Component } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent {
  email: string = "maria.herrador@gmx.de";
  onKeyUp() {
  console.log(this.email);
}
}
