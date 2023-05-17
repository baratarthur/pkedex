import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { PokemonBasic } from '@model/Pokemon';
import { PokedexService } from '@service/pokedex.service';
import { CardComponent } from '@component/card/card.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
    CardComponent,
  ]
})
export class HomeComponent implements OnInit {
  public pokemons: PokemonBasic[] = [];
  public numberOfPokemons: number | undefined;
  private loadMoreUrl = '';

  constructor(
    private pokedexService: PokedexService,
  ) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons() {
    return this.pokedexService.getPokemons(this.loadMoreUrl)
      .subscribe(
        (response) => {
          this.pokemons = [
            ...this.pokemons,
            ...response.results
          ];
          this.numberOfPokemons = response.count;
          this.loadMoreUrl = response.next;
        }
      );
  }
  
}
