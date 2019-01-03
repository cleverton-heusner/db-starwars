import { RouterModule } from '@angular/router';
import { PersonagensComponent } from './personagens/personagens.component';
import { FilmesService } from './filmes/filmes.service';
import { PersonagensService } from './personagens/personagens.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmesComponent } from './filmes/filmes.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { HomeComponent } from './home/home.component';
import { ParametroRequisicaoService } from './commons/http/parametro-requisicao.service';
import { AlturaPipe } from './commons/pipes/altura.pipe';
import { AnoNascimentoPipe } from './commons/pipes/ano-nascimento.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonagensComponent,
    FilmesComponent,
    BarraNavegacaoComponent,
    HomeComponent,
    AlturaPipe,
    AnoNascimentoPipe
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'elenco',
        component: PersonagensComponent
      },
      {
        path: 'filmes',
        component: FilmesComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ])
  ],
  providers: [ParametroRequisicaoService, FilmesService, PersonagensService],
  bootstrap: [AppComponent]
})
export class AppModule { }
