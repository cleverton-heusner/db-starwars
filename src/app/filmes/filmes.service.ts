import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private readonly URL_FILMES = 'https://swapi.co/api/films';

  constructor(private http: HttpClient) { }

  listarFilmes(){
    return this.http.get(this.URL_FILMES);
  }
}
