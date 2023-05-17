import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pokemon } from '@model/Pokemon';
import { PokedexService } from '@service/pokedex.service';
import { StatusComponent } from '@component/status/status.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    StatusComponent,
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pokemonName: string = '';

  public data: Pokemon | undefined;

  constructor(
    private pokedexService: PokedexService,
  ) {}

  ngOnInit(): void {
    this.loadPokemonData();
  }

  loadPokemonData(): void {
    this.pokedexService.getPokemon(this.pokemonName)
      .subscribe(
        data => {
          this.data = data;
        }
      );
  }
}
