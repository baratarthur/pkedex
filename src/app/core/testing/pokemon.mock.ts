import { Pokemon, PokemonBasic } from "@model/Pokemon";
import { Response } from "@model/Response";

export const pokemons: Response<PokemonBasic> = {
    count: 2,
    next: 'test',
    previous: '',
    results: [
        {name: 'test 1', url: 'http://test.com'},
        {name: 'test 2', url: 'http://test.com'},
    ]
}

export const pokemon: Pokemon = {
    id: 0,
    height: 0,
    base_experience: 0,
    is_default: false,
    location_area_encounters: "",
    name: "testmon",
    order: 0,
    weight: 0,
    species: {
        name: "",
        url: ""
    },
    sprites: {
        back_default: null,
        back_female: null,
        back_shiny: null,
        back_shiny_female: null, 
        front_default: null,
        front_female: null,
        front_shiny: null,
        front_shiny_female: null,
        other: {
            dream_world: {
                front_default: null,
                front_female: null,
            },
            home: {
                front_default: null,
                front_female: null,
                front_shiny: null,
                front_shiny_female: null,
            },
            'official-artwork': {
                front_default: null,
                front_shiny: null,
            },
        }
    },
    stats: [
        {base_stat: -1, stat: {name: 'test 1', url: ''}, effort:0},
        {base_stat: -1, stat: {name: 'test 2', url: ''}, effort:0},
    ]
}