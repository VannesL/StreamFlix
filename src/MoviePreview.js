import React from 'react'
import './App.css';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';

function MoviePreview({id, poster_path, title, vote_average}) {

  const Style={
    textDecoration: 'none',
    color: 'wheat'
  };

  var calculatePay = (rating) => {
      if(rating >= 1 && rating < 3){
          return 3500
      }
      else if(rating >= 3 && rating < 6){
          return 8250
      }
      else if(rating >= 6 && rating < 8){
          return 16350
      }
      else{
          return 21250
      }
  }

  var isOwned = (id) => {
    if(id%2 == 0){
      return <div className="statusOwned">Owned</div>
    }
    else{
      return <div className="statusUnowned">Unowned</div>
    }
}

  return (
    <div className="movie">
      <div className="moviePoster">
        <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"+poster_path} alt="" />
      </div>
      <div className="movieStatus">
        <div>
          <Link style={Style} to={`/${id}-${title.replaceAll(" ", "-")}`}>{title}</Link>
        </div>
        <div className="price">
          <NumberFormat value={calculatePay(vote_average)} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
        </div>
      </div>
      {isOwned(id)}
    </div>
  );
}

export default MoviePreview;