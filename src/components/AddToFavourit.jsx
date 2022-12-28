function AddToFavourit(props) {

    return (
        <div>
            <div className="addToFavorit"><i className={props.icon}></i>{props.add}</div>
        </div>
    )
    
}

export default AddToFavourit