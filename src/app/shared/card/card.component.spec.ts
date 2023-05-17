import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { pokemon } from '@testing/pokemon.mock';
import { PokedexService } from '@service/pokedex.service';
import { pokedexServiceMock } from '@testing/pokedex-service.mock';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardComponent,
        HttpClientTestingModule
      ],
      providers: [
        {provide: PokedexService, useValue: pokedexServiceMock},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("Component initialization", () => {
    it('should fetch pokemon data', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.innerHTML).toContain(pokemon.name);
      
      pokemon.stats.forEach(stat => {
        expect(compiled.innerHTML).toContain(stat.stat.name);
        expect(compiled.innerHTML).toContain(stat.base_stat.toString());
      })
    });
  });
});
