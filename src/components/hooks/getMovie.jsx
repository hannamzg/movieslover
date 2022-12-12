
import  {getMovieServeies} from "../services/MoviesServies";
import { useEffect,useState } from "react";
import MovieList from "../MovieList";


function GetMovies(props) {
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        const getMovie = async()=>{
            const{data}= await getMovieServeies(props.name);
            setMovies(data.Search) 
        };
       
        getMovie()
        
    },[props.name]) 
    if (movies) {
        return <MovieList movies={movies} />
    }
    else{
         return
    }
   
 
}

export default GetMovies;

