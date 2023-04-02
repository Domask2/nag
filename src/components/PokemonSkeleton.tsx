import * as React from 'react';
import { Card, CardHeader, CardContent, Skeleton, Typography } from '@mui/material';

const PokemonSkeleton = () => (
    <Card className='pokemonLoader'>
        <CardHeader
            title='...'
        />

        <CardContent>
            <Typography variant='body2' color='text.secondary'>
                <Skeleton animation='wave' variant='rectangular' width={20} height={10} />
                <br />
                <Skeleton animation='wave' variant='rectangular' width={20} height={10} />
            </Typography>
        </CardContent>
    </Card>
);

export default PokemonSkeleton;