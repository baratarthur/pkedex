import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '@environment/enviroment';
import { Response } from '@model/Response';
import { Pokemon, PokemonBasic } from '@model/Pokemon';
import { INITIAL_OFFSET, PAGINATION_SIZE } from '@config/constants';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  public url = `${environment.pokeapiUrl}/pokemon`;
  public loading: boolean = false;

  constructor(
    private http: HttpClient,
  ) {}

  getPokemons(nextUrl: string = ''): Observable<Response<PokemonBasic>> {
    this.startLoading();
    if(nextUrl) return this.http.get<Response<PokemonBasic>>(nextUrl);
    
    const params = new HttpParams()
      .set('offset', INITIAL_OFFSET)
      .set('limit', PAGINATION_SIZE);
    
    return this.http.get<Response<PokemonBasic>>(this.url, { params });
  }

  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.url}/${name}`);
  }

  startLoading(): void {
    this.loading = true;
  }

  finishLoading(): void {
    this.loading = false;
  }
}
