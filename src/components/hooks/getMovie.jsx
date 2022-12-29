
import  {getMovieServeies} from "../services/MoviesServies";
import { useEffect,useState } from "react";
import MovieList from "../MovieList";
import MovieInfo from "../movieInfo";
import { toast } from "react-toastify";

function GetMovies(props) {
    const [movies,setMovies] = useState([]);
    const [test,setTest] = useState();
    const [favorite,setFavorite] = useState([]);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favouritesfinalReact', JSON.stringify(items));
    };

    useEffect(() => {
        const movieFavourites = JSON.parse(
            localStorage.getItem('react-movie-app-favouritesfinalReact')
        );
    
        if (movieFavourites) {
            setFavorite(movieFavourites);
        }
      }, []);

    const AddtoFavouritesMovie = (movie) =>{
         for(let i=0; i<favorite.length; i++){
            if (movie.Title === favorite[i].Title) {
                toast("you have this movie in favorite")
                return;           
            }
        } 
        const newFavouritesList = [...favorite,movie];
        setFavorite(newFavouritesList)
        saveToLocalStorage(newFavouritesList);
    } 

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
    
    if (test && movies) {
        return(
            <>
                <MovieInfo name={test} setTest={()=>restart()}/>
                <MovieList movies={movies} test={test} setTest={setTest} AddtoFavouritesMovie={AddtoFavouritesMovie} /> 
            </> 
            ) 
    }
    if (movies ) {
      return <>
        <MovieList movies={movies} test={test} setTest={setTest} AddtoFavouritesMovie={AddtoFavouritesMovie} /> 
      </>
    }
    else{
         return
    }
   
 
}

export default GetMovies;
 
