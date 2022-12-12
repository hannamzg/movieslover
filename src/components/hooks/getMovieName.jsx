
import  {getMovieServeies} from "../services/MoviesServies";
import { useEffect,useState } from "react";
import MoviesNameList from "../MoviesNameList";


function GetMoviesName(props) {
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        const getMovie = async()=>{
            const{data}= await getMovieServeies(props.name);
            setMovies(data.Search) 
        };
       
        getMovie()
        
    },[props.name]) 
    if (movies) {
        return <MoviesNameList movies={movies} />
    }
    else{
         return
    }
   
 
}

export default GetMoviesName;
