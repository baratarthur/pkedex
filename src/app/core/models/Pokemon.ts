export interface PokemonBasic {
    name: string;
    url: string;
    data?: Pokemon;
}

export interface Pokemon {
    id:number;
    height: number;
    base_experience: number;
    is_default: boolean;
    location_area_encounters: string;
    name: string;
    order: number;
    weight: number;
    species: DataFormat;
    sprites: Sprite;
    stats: Status[];
    abilities: Ability[];
    types: Type[]
}

interface DataFormat {
    name: string;
    url: string;
}

interface Sprite {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null; 
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
        dream_world: {
            front_default: string | null;
            front_female: string | null;
        },
        home: {
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        },
        'official-artwork': {
            front_default: string | null;
            front_shiny: string | null;
        },
    }
}

export interface Status {
    base_stat: number;
    effort: number;
    stat: DataFormat;
}

export interface Ability {
    id: number;
    is_hidden: boolean;
    ability: DataFormat;
}

export interface Type {
    slot: number;
    type: DataFormat;
}
