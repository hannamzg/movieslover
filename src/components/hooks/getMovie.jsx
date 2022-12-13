
import  {getMovieServeies} from "../services/MoviesServies";
import { useEffect,useState } from "react";
import MovieList from "../MovieList";
import MovieInfo from "../movieInfo"
function GetMovies(props) {
    const [movies,setMovies] = useState([]);
    const [test,setTest] = useState();

    function restart() {
        setTest()
    }
    
    useEffect(()=>{
        const getMovie = async()=>{
            const{data}= await getMovieServeies(props.name);
            setMovies(data.Search) 
        };
       
        getMovie()
        
    },[props.name]) 
    
    if (test) {
        return <MovieInfo name={test} setTest={()=>restart()}/>        
    }
    if (movies) {
        return <MovieList movies={movies} test={test} setTest={setTest}/>
    }
    else{
         return
    }
   
 
}

export default GetMovies;

