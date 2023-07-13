import { Component } from '@angular/core';

@Component({
  selector: 'app-drowpdown-list',
  templateUrl: './drowpdown-list.component.html',
  styleUrls: ['./drowpdown-list.component.css']
})
export class DrowpdownListComponent {
  filterData() {
    console.log("this will filter stuff");
  }
}
