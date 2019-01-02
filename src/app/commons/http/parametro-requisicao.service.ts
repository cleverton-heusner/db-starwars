import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParametroRequisicaoService {
  constructor() {
  }

  private _chave: string;
  private _valor: string;

  get chave() {
    return this._chave;
  }

  set chave(chave) {
    this._chave = chave;
  }

  get valor() {
    return this._valor;
  }

  set valor(valor) {
    this._valor = valor;
  }
}
