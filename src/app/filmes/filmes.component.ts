import { Component, OnInit } from '@angular/core';
import { FilmesService } from './filmes.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html'
})
export class FilmesComponent implements OnInit {

  constructor(private filmesService: FilmesService) { }

  private filmes: any = [];
  private filmesCarregados: boolean = false;
  private progressoCarregamento: number = 50;

  private ordenarFilmesPorElenco(){
    this.filmes.sort((a, b) => b.characters.length - a.characters.length);
  }

  private listarFilmes() {
    this.filmesService.listarFilmes().subscribe((res: any) => {
      this.filmes = res.results;
      this.ordenarFilmesPorElenco();

      this.filmesCarregados = true;
      this.progressoCarregamento += this.progressoCarregamento;
    });
  }

  ngOnInit() {
    this.listarFilmes();
  }

  rastrearPorIdEpisodio(indice, filme) {
    return filme.episode_id;
  }
}
