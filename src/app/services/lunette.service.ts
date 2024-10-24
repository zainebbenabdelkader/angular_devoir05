import { Injectable } from '@angular/core';
import { Style } from '../model/style.model';
import { Lunette } from '../model/lunette.model'; // Updated model import
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StyleWrapper } from '../model/styleWrapped.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LunetteService { // Updated service name
  apiURL: string = 'http://localhost:8080/lunettes/api'; // Updated URL
  apiURLCat: string = 'http://localhost:8080/lunettes/cat'; // Updated URL

  lunettes: Lunette[]; // Updated to Lunette
  // categories: Categorie[];

  constructor(private http: HttpClient) {
    this.lunettes = [
      { idLunette: 1, nomLunette: "Lunette Asus", prixLunette: 3000.60, dateCreation: new Date("01/14/2011"),
        style: { idSty: 1, nomSty: "PC" } },
      { idLunette: 2, nomLunette: "Lunette Epson", prixLunette: 450, dateCreation: new Date("12/17/2010"),
        style: { idSty: 2, nomSty: "Imprimante" } },
      { idLunette: 3, nomLunette: "Lunette Samsung", prixLunette: 900.12, dateCreation: new Date("02/20/2020"),
        style: { idSty: 1, nomSty: "PC" } }
    ];
  }
  
  listeLunettes(): Observable<Lunette[]> { // Updated method name
    return this.http.get<Lunette[]>(this.apiURL);
  }

  ajouterLunette(prod: Lunette): Observable<Lunette> { // Updated method name
    return this.http.post<Lunette>(this.apiURL, prod, httpOptions);
  }

  supprimerLunette(id: number) { // Updated method name
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterLunette(id: number): Observable<Lunette> { // Updated method name
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Lunette>(url);
  }

  trierLunettes() { // Updated method name
    this.lunettes = this.lunettes.sort((n1, n2) => {
      if (n1.idLunette > n2.idLunette) {
        return 1;
      }
      if (n1.idLunette < n2.idLunette) {
        return -1;
      }
      return 0;
    });
  }

  updateLunette(prod: Lunette): Observable<Lunette> { // Updated method name
    return this.http.put<Lunette>(this.apiURL, prod, httpOptions);
  }

  listeCategories(): Observable<StyleWrapper> {
    return this.http.get<StyleWrapper>(this.apiURLCat);
  }

  rechercherParStyle(idCat: number): Observable<Lunette[]> { // Updated method name
    const url = `${this.apiURL}/lunettescat/${idCat}`;
    return this.http.get<Lunette[]>(url);
  }

  rechercherParNom(nom: string): Observable<Lunette[]> { // Updated method name
    const url = `${this.apiURL}/lunettesByName/${nom}`;
    return this.http.get<Lunette[]>(url);
  }
}
