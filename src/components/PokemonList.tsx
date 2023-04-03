import React, { FC, useState } from 'react';
import Grid from '@mui/material/Grid';
import useSWR from 'swr';
import Pagination from '@mui/material/Pagination';
import PokemonSkeleton from './PokemonSkeleton';
import CardPokemon from './CardPokemon';
import fetcher from '../utils/utils';
import { PokemonListProps, PokemonListType, PokemonType } from './types';

const PokemonList: FC<PokemonListProps> = ({ limit = 12 }) => {
    const [offset, setOffset] = useState(0);
    const [page, setPage] = useState(1);

    const { data, error, isLoading } = useSWR<PokemonListType, string>(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, fetcher,
    );

    const handleChange = (event: React.ChangeEvent<unknown>, c: number) => {
        setPage(c);
        setOffset((c * limit) - limit);
    };

    if (error) return <div className='loader'>Что-то пошло не так...</div>;

    return (
        <>
            <Grid
                item
                container
                style={{ marginBottom: '20px' }}
                justifyContent='space-evenly'
                alignItems='center'
                direction='row'>

                {
                    isLoading ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => (
                            <PokemonSkeleton key={item} />
                        )) :
                        data && data.results.map((card: PokemonType) => (
                            <CardPokemon key={card.url} pokemon={card} />
                        ))
                }

            </Grid>

            <Grid container alignItems='center' justifyContent='center'>
                <Pagination
                    count={107}
                    size='large'
                    page={page}
                    variant='outlined'
                    shape='rounded'
                    onChange={handleChange}
                />
            </Grid>
        </>
    );
};

export default PokemonList;


