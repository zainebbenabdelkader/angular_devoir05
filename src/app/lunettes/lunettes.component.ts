import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lunette } from '../model/lunette.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lunettes',
  templateUrl: './lunettes.component.html',
})
@Injectable({
  providedIn: 'root'
})


export class LunettesComponent {

  private apiUrl = 'http://your-api-url/lunettes'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  listeLunettes(): Observable<Lunette[]> {
    return this.http.get<Lunette[]>(this.apiUrl); // Adjust based on your API
  }

  supprimerLunette(idLunette: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${idLunette}`); // Adjust based on your API
  }
}
