import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { PokedexService } from '@service/pokedex.service';
import { StatusComponent } from '@component/status/status.component';
import { Ability, Status, Type } from '@model/Pokemon';
import { TypeComponent } from '@component/type/type.component';
import { AbilityComponent } from '@component/ability/ability.component';

@Component({
  selector: 'app-pokemon-info',
  standalone: true,
  imports: [
    CommonModule,
    StatusComponent,
    TypeComponent,
    AbilityComponent,
    RouterLink,
  ],
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {
  pokemonName: string | undefined;
  pokemonImageUrl: string | undefined;
  stats: Status[] = [];
  types: Type[] = [];
  abilities: Ability[] = [];

  constructor(
    private router: Router,
    private pokedexService: PokedexService,
  ) {}

  ngOnInit(): void {
    this.checkIfHasData();
    this.loadPokemonData();
  }
  
  private checkIfHasData(): void {
    const p = this.pokedexService.pokemon;
    if(!p) this.router.navigate(['']);
  }
  
  private loadPokemonData(): void {
    const p = this.pokedexService.pokemon;
    
    this.pokemonName = p?.name;
    this.pokemonImageUrl = p?.sprites.other['official-artwork'].front_default || undefined;
    this.stats = p?.stats || [];
    this.types = p?.types || [];
    this.abilities = p?.abilities || [];
  }

}
