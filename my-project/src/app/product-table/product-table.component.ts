import { Component } from '@angular/core';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {
  products: any = [
    { id: 1, 
      name: "diamond",
      category: "gem", 
      price: "1400 $/carat",
    },

    { id: 2, 
      name: "platinum",
      category: "metal", 
      price: "30,06 $/g",
    },

    { id: 3, 
      name: "emerald",
      category: "gem", 
      price: "600 $/carat",
    },

    { id: 4, 
      name: "gold",
      category: "metal", 
      price: "51 $/g",
    },

    { id: 5, 
      name: "rubi",
      category: "gem", 
      price: "300 $/carat",
    },
 
  ]

}
