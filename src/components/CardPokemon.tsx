import React, { FC } from 'react';
import useSWR from 'swr';
import { Card, CardHeader, CardContent, Skeleton, Typography, Grow, Zoom } from '@mui/material';
import fetcher from '../utils/utils';
import { CardPokemonProps, PokemonInfoType } from './types';

const CardPokemon: FC<CardPokemonProps> = ({ pokemon }) => {
    const { data, isLoading } = useSWR<PokemonInfoType, string>(pokemon.url, fetcher);

    return (
        <Card className='cardPokemon'>
            <Zoom in={!isLoading}>
                <CardHeader title={pokemon.name} />
            </Zoom>

            {
                isLoading ? (
                    <CardContent>
                        <Typography variant='body2' color='text.secondary'>
                            <Skeleton animation='wave' variant='rectangular' width={20} height={10} />
                            <br />
                            <Skeleton animation='wave' variant='rectangular' width={20} height={10} />
                        </Typography>
                    </CardContent>
                ) : (
                    data && <CardContent>
                        <Grow in={!isLoading}
                              style={{ transformOrigin: '0 0 0' }}
                              {...(!isLoading ? { timeout: 1000 } : {})}
                        >
                            <Typography variant='body2' color='text.secondary'>
                                Вес: {data.height} ед.
                            </Typography>
                        </Grow>
                        <Grow
                            in={!isLoading}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(!isLoading ? { timeout: 2000 } : {})}
                        >
                            <Typography variant='body2' color='text.secondary'>
                               Рост: {data.weight} ед.
                            </Typography>
                        </Grow>
                    </CardContent>
                )
            }
        </Card>
    );
};

export default CardPokemon;