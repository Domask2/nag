import React, { lazy, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
import './scss/app.scss';

const PokemonList = lazy(() => import('./components/PokemonList'));

const App = () => (
    <div className='app'>
        <ErrorBoundary fallback={<div className='loader'>Что-то пошло не так...</div>}>
            <Suspense fallback={<Loader />}>
                <PokemonList limit={12} />
            </Suspense>
        </ErrorBoundary>
    </div>
);

export default App;


