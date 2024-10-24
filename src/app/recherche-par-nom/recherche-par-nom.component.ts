import { Component, OnInit } from '@angular/core';
import { Lunette } from '../model/lunette.model'; // Make sure to update the import
import { LunetteService } from '../services/lunette.service'; // Service that handles lunettes

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: []
})
export class RechercheParNomComponent implements OnInit {

  nomLunette!: string; // Changed from nomProduit to nomLunette
  lunettes!: Lunette[]; // Changed from Produit[] to Lunette[]
  allLunettes!: Lunette[]; // Changed from Produit[] to Lunette[]
  searchTerm!: string;

  constructor(private lunetteService: LunetteService) { }

  ngOnInit(): void {
    this.lunetteService.listeLunettes().subscribe(lunettes => { // Updated variable name
      console.log(lunettes);
      this.lunettes = lunettes; // Updated variable name
      this.allLunettes = lunettes; // Store all lunette items for filtering
    });
  }

  rechercherLunettes() { // Changed from rechercherProds to rechercherLunettes
    this.lunetteService.rechercherParNom(this.nomLunette).subscribe(lunettes => { // Updated variable name
      console.log(lunettes);
      this.lunettes = lunettes; // Updated variable name
    });
  }

  onKeyUp(filterText: string) {
    this.lunettes = this.allLunettes.filter(item =>
      item.nomLunette.toLowerCase().includes(filterText.toLowerCase())); // Updated property name
  }
}
