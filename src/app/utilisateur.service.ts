import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; // HttpClient is still used
import { Observable } from 'rxjs';

export interface Utilisateur {
  id?: number ;
  name: string;
  prenom: string;
  email: string;
  adresse: string;
  motDePasse: string;
  role: string;
  isVlidated: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiUrl = 'http://localhost:8080/utilisateurs'; // API URL

  constructor(private http: HttpClient) { } // HttpClient injected here

  // Methods to interact with the backend
  ajouterUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.apiUrl, utilisateur, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.apiUrl);
  }

  getUtilisateurById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiUrl}/${id}`);
  }

  mettreAJourUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${this.apiUrl}/${utilisateur.id}`, utilisateur, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteUtilisateur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  findByName(query: string): Observable<Utilisateur[]> {
    const params = new HttpParams().set('query', query);
    return this.http.get<Utilisateur[]>(`${this.apiUrl}/search`, { params });
  }
}
