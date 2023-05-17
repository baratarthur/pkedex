import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PokedexService } from './pokedex.service';
import { HttpClient } from '@angular/common/http';
import { pokemon, pokemons } from '../testing/pokemon.mock';

describe('PokedexService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let service: PokedexService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    
    service = TestBed.inject(PokedexService);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('pokemon fetch', () => {
    it('should call the API correctly', () => {
      service.getPokemons().subscribe();

      const req = httpTestingController.expectOne(`${service.url}?offset=0&limit=6`);
      expect(req.request.method).toBe('GET');
    });

    it('should return pokemon data correctly', () => {
      service.getPokemons().subscribe(pokemons => {
        expect(pokemons.count).toBe(pokemons.results.length);
      });

      httpTestingController
        .expectOne(`${service.url}?offset=0&limit=6`)
        .flush(pokemons);
    });

    it('should next url to load pokemon data', () => {
      const nextUrl = '/test';

      service.getPokemons(nextUrl).subscribe();

      const req = httpTestingController.expectOne(nextUrl);
      
      expect(req.request.method).toBe('GET');
    });
  });

  describe('fetch one pokemon data', () => {
    it('should fetch a pokemon by its name', () => {
      const pokemonName = 'testmon';

      service.getPokemon(pokemonName).subscribe((pokemonData) => {
        expect(pokemonData.name).toBe(pokemonName);
      });

      httpTestingController
        .expectOne(`${service.url}/${pokemonName}`)
        .flush(pokemon);
    });
  });
});
