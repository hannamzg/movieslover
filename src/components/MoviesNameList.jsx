
function MoviesNameList(props) {
    
    return(
        <> 
         {props.movies.map((movie,index)=>(
    
            <button className="dropdown-item  dropdown-itemNames"  key={index} >{movie.Title}</button>
                       
        ))}
        </>
       
    )

}

export default MoviesNameList;