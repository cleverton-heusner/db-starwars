import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoHttpService {

  constructor(private http: HttpClient) { }

  get(url: string){
    return this.http.get(url);
  }
}
