export interface Search {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface RootObjectListAPIResponse {
    Search: Search[];
    totalResults: string;
    Response: string;
}
