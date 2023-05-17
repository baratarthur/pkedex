import { PokedexService } from "@service/pokedex.service";
import { Observable, of } from "rxjs";
import { pokemon, pokemons } from "./pokemon.mock";
import { Pokemon } from "@model/Pokemon";

export const pokedexServiceMock: Partial<PokedexService> = {
    getPokemons: (next: string) => {
        return of(pokemons);
    },
    getPokemon: function (name: string): Observable<Pokemon> {
        return of(pokemon);
    }
}
