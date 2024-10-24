import { Component, OnInit } from '@angular/core';
import { Style } from '../model/style.model'; // Importing Style for categories
import { Lunette } from '../model/lunette.model'; // Updated import to Produit
import { LunetteService } from '../services/lunette.service'; // Make sure the service name matches your naming conventions

@Component({
  selector: 'app-recherche-par-style',
  templateUrl: './recherche-par-style.component.html', // Ensure the HTML file name matches
  styles: []
})
export class RechercheParStyleComponent implements OnInit {
  idStyle!: number; // ID for the selected style
  styles!: Style[]; // List of styles
  produits!: Lunette[]; // List of produits

  constructor(private lunetteService: LunetteService) { }

  ngOnInit(): void {
    this.lunetteService.listeStyles().subscribe(stys => {
      this.styles = stys._embedded.styles; // Ensure this maps to the right property
      console.log(stys);
    });
  }

  onChange() {
    this.lunetteService.rechercherParStyle(this.idStyle).subscribe(Lunettes => {
      this.produits = Lunettes; // Updated variable name to match 'produits'
    });
  }
  
}
