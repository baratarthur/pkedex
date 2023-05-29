import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInfoComponent } from './pokemon-info.component';
import { PokedexService } from '@service/pokedex.service';
import { pokedexServiceMock } from '@testing/pokedex-service.mock';
import { RouterTestingModule } from '@angular/router/testing';

describe('PokemonInfoComponent', () => {
  let component: PokemonInfoComponent;
  let fixture: ComponentFixture<PokemonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PokemonInfoComponent,
        RouterTestingModule,
      ],
      providers: [
        {provide: PokedexService, useValue: pokedexServiceMock},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonInfoComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
