  import Test from "./HttpMoviesServies";


export function getMovieServeies(name) {
    return Test.get(`http://www.omdbapi.com/?s=${name}&apikey=cfaf86ed`);
} 