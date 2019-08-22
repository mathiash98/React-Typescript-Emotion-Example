
import movieData from './movieData.json';

export interface IQuery {
    search?: string,
    year?: number,
    rating?: number,
    [propName: string]: any
}

const movieAPI = {
    /**
     * Search for movies by freetext
     * @param {IQuery} query What you wan't to search for
     */
    search (query: IQuery): Promise<any> {
        return new Promise((resolve, reject) => {
            let params: number = 0;
            Object.keys(query).map(key => (query[key] !== "" && params++ ));

            const movies = movieData.filter(movie => {
                let paramsVerified: number = 0;

                if (query.search && (movie.Movie_Title as string).toLowerCase().indexOf(query.search.toLowerCase()) > -1) paramsVerified++;
                if (query.year && movie.YR_Released === Number(query.year)) paramsVerified++;
                if (query.rating && movie.Rating >= query.rating) paramsVerified++;

                if(params === paramsVerified) {
                    return true;
                } else {
                    return false;
                }
            });
            resolve(movies);
        });
    },
}

export default movieAPI;