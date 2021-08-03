import React from 'react'
import './App.css';
import {Link} from 'react-router-dom';

function MoviePreview({id, poster_path, title, vote_average}) {

  const Style={
    textDecoration: 'none',
    color: 'wheat'
  };

  var calculatePay = (rating) => {
      if(rating >= 1 && rating < 3){
          return "3.500"
      }
      else if(rating >= 3 && rating < 6){
          return "8.250"
      }
      else if(rating >= 6 && rating < 8){
          return "16.350"
      }
      else{
          return "21.250"
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
          Rp.{calculatePay(vote_average)}
        </div>
        <div className="status">
          Status: Unowned
        </div>
      </div>
    </div>
  );
}

export default MoviePreview;