import { createContext } from 'react';
import { MovieListContextInterface } from './interfaces/context.interface';

const MovieListContext = createContext<
    MovieListContextInterface
>({
    activeMovie: {
        id: '',
        poster: '',
        title: '',
        type: 'movie',
        year: ''
    },
    query: '',
    onFetchAPI: () => {},
    setQuery: () => {},
    setActiveMovie: () => {}
});

export default MovieListContext;
