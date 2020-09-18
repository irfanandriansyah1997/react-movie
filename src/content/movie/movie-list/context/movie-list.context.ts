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
    showDialog: false,
    setQuery: () => {},
    setShowDialog: () => {},
    setActiveMovie: () => {}
});

export default MovieListContext;
