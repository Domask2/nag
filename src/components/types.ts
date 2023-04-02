export interface PokemonListProps {
    limit: number
}

export interface PokemonListType {
    count: number,
    next: string,
    previous: string | null,
    results: PokemonType[]
}

export interface PokemonType {
    name: string,
    url: string
}

export interface PokemonInfoType {
    height: number,
    weight: number
}

export interface CardPokemonProps {
    pokemon: PokemonType
}