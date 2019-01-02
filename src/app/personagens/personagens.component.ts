import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PersonagensService } from './personagens.service';
import { RequisicaoHttpService } from '../commons/http/requisicao-http.service';
import { ParametroRequisicaoService } from '../commons/http/parametro-requisicao.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html'
})
export class PersonagensComponent implements OnInit {

  constructor(private requisicaoHttp: RequisicaoHttpService,
    private parametroRequisicao: ParametroRequisicaoService,
    private personagensService: PersonagensService) {
  }

  private PROGRESSO_CARREGAMENTO_MINIMO: number = 0;
  private PROGRESSO_CARREGAMENTO_MAXIMO: number = 100;
  private PAGINA_INICIAL: number = 1;
  private TAMANHO_MAXIMO_PAGINA: number = 10;
  private readonly ESPECIE_DESCONHECIDA: string = 'unknown';

  personagens: any = [];
  personagensCarregados: boolean = false;
  progressoCarregamento: number = this.PROGRESSO_CARREGAMENTO_MINIMO;
  tamanhoPagina: number = this.TAMANHO_MAXIMO_PAGINA;
  pagina: any;
  totalPersonagens: number;

  private buscarPlanetaEspecieDePersonagem(personagem: any) {
    let urlPlanetas = personagem.homeworld;
    let urlEspecie = personagem.species.pop();
    let requisicoes = [];
    requisicoes.push(this.requisicaoHttp.get(urlPlanetas));

    if (urlEspecie) {
      requisicoes.push(this.requisicaoHttp.get(urlEspecie));
    }

    Observable.forkJoin(requisicoes).subscribe((res) => {
      personagem.nomePlaneta = res[0].name;
      personagem.nomeEspecie = res[1] ? res[1].name : this.ESPECIE_DESCONHECIDA;
      this.progressoCarregamento += this.tamanhoPagina;

      if (this.progressoCarregamento === this.PROGRESSO_CARREGAMENTO_MAXIMO) {
        this.personagensCarregados = true;
        this.progressoCarregamento = this.PROGRESSO_CARREGAMENTO_MINIMO;
      }
    });
  }

  private listarPersonagens() {
    this.parametroRequisicao.chave = 'page';
    this.parametroRequisicao.valor = this.pagina;

    this.personagensService.listarPersonagens(this.parametroRequisicao)
      .subscribe((res) => {
        this.totalPersonagens = res.count;
        this.personagens = res.results;

        for (let personagem of this.personagens) {
          this.buscarPlanetaEspecieDePersonagem(personagem);
        }
      });
  }

  ngOnInit() {
    this.pagina = this.PAGINA_INICIAL;
    this.listarPersonagens();
  }

  listarPersonagensProxPagina() {
    this.personagensCarregados = false;
    this.listarPersonagens();
  }

  rastrearPorIndice(indice) {
    return indice;
  }
}
