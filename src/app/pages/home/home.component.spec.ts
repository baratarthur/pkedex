import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
import { PokedexService } from '@service/pokedex.service';
import { pokedexServiceMock } from '@testing/pokedex-service.mock';
import { pokemons } from '@testing/pokemon.mock';
import { pokemon } from '@testing/pokemon.mock';
import { CardComponent } from '@component/card/card.component';

describe('HomeComponent', () => {
  let httpClient: HttpClient;
  let httpController: HttpTestingController;
  let pokedexService: PokedexService;

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent,
        HttpClientTestingModule,
      ],
    })
    .compileComponents();
  });

  describe('Initialization process', () => {
    beforeEach(() => {
      httpClient = TestBed.inject(HttpClient);
      httpController = TestBed.inject(HttpTestingController);

      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should begins with all variables empty or undefined', () => {
      expect(component.numberOfPokemons).toBe(undefined);
      expect(component.pokemons.length).toBe(0);
    });

    it('should fetch the pokemon data on init', () => {
      const spy = spyOn(component, 'loadPokemons').and.callThrough();

      component.ngOnInit();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('Pokemon load', () => {
    beforeEach(async () => {
      TestBed.overrideProvider(PokedexService, { useValue: pokedexServiceMock });
  
      httpClient = TestBed.inject(HttpClient);
      httpController = TestBed.inject(HttpTestingController);

      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should call loadMore method when click on load more', () => {
      const spy = spyOn(component, 'loadPokemons');
      const loadMoreButton: HTMLButtonElement = fixture.debugElement.query(
        By.css('#load-more')
      ).nativeElement;

      loadMoreButton.click();

      expect(spy).toHaveBeenCalled();
    });

    it('should increment number of pokemons on load more', fakeAsync(() => {
      component.loadPokemons();

      tick();

      expect(component.pokemons.length).toBe(pokemons.results.length * 2);
      expect(component.numberOfPokemons).toBe(pokemons.count);
    }));
  });

  describe('navigation behavior', () => {
    beforeEach(async () => {  
      pokedexService = TestBed.inject(PokedexService);
      httpClient = TestBed.inject(HttpClient);
      httpController = TestBed.inject(HttpTestingController);

      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should set pokemon on click', () => {
      const setPokemonSpy = spyOn(pokedexService, 'setPokemon');
      const navigateSpy = spyOn(component.router, 'navigate');

      component.navigateTo(pokemon);

      expect(setPokemonSpy).toHaveBeenCalledWith(pokemon);
      expect(navigateSpy).toHaveBeenCalledWith(['/pokemon']);
    });
  });
});
