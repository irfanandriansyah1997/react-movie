/**
 * Score Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
export interface ScoreInterface {
    metaScore: string;
    imdbRating: string;
    imdbVotes: string;
}

/**
 * Rating Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
export interface RatingInterface {
    item: RatingItemInterface[];
}

/**
 * Rating Item Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
export interface RatingItemInterface {
    source: string;
    value: string;
}

/**
 * Pagination Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
export interface PaginationInterface {
    page: number;
    perPage: number;
    totalPage: number;
    totalResult: number;
}
