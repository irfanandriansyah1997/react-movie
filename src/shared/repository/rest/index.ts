import MovieRepositoryImplementation from './implementation/movie';

const RepositoryRestAPIService = {
    MovieRepository: MovieRepositoryImplementation.singleton
};

export default RepositoryRestAPIService;
