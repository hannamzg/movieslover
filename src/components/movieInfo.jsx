

function MovieInfo(props) {
 
    return (
    <div className="infoMovie" >
        <div>
            <h2>{props.name.Title}</h2>
            <img src={props.name.Poster} alt={props.name.poster} className="images"/>
            <span className="closeBtn" onClick={()=> props.setTest()}><i class="bi bi-x-circle"></i></span>
        </div>
       
     </div>
     )
}

export default MovieInfo;