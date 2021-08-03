import React from 'react'
import {Link} from 'react-router-dom';

function MovieList({id, poster_path, title}) {

    const Style={
        textDecoration: 'none',
        color: 'wheat'
    };
    

    return (
        <div>
            <div className="mov" key={id}>
                <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"+poster_path} alt="" />
                <Link style={Style} to={`/${id}-${title.replaceAll(" ", "-")}`}>{title}</Link>
            </div>
        </div>
    )
}

export default MovieList;