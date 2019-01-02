import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {
  private readonly URL_PERSONAGENS = 'https://swapi.co/api/people/';

  constructor(private http: HttpClient) { }

  listarPersonagens(param: ParametroRequisicaoService) {
    let params = new HttpParams();
    params = params.append(param.chave, param.valor);

    return this.http.get(this.URL_PERSONAGENS, { params: params });
  }
}
