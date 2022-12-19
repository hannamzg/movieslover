import axios from "axios";



export async function getMovieServeies(name) {
    var instance = axios.create();
    delete instance.defaults.headers.common['x-auth-token']; 
    let stam = instance.get(`http://www.omdbapi.com/?s=${name}&apikey=cfaf86ed`);
    return stam

} 