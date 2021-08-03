import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Home({match}) {

  const Style={
    textDecoration: 'none',
    color: 'wheat'
  };

  console.log(match);

  // const getPage = () => {
  //   if(match.params.pageNum){
  //     return match.params.pageNum;
  //   }
  //   else{
  //     return 1;
  //   }
  // }

  // var pageNum = getPage();
  // console.log(pageNum)

  const [results, setResults] = useState([]);
  const [pageNum, setpageNums] = useState(1);

  useEffect(() => {
    fetchItems();
  }, [pageNum]);

  const fetchItems = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0bcbffad24fc8c3861fcf6e96088dd11&language=en-US&page=${pageNum}`);
    
    const movies = await data.json();
    console.log(pageNum)
    console.log(movies.results)
    setResults(movies.results);
  }

  const getnextPage = () => {
    console.log("here");
    setpageNums(pageNum+1);
  }

  const getprevPage = () => {
    console.log("here");
    if(pageNum > 1){
      setpageNums(pageNum-1);
    }
  }

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
    <div>
      <div className="movies">
        {results.map(result =>(
          <div className="movie" key={result.id}>
            <div className="moviePoster">
              <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"+result.poster_path} alt="" />
            </div>
            <div className="movieStatus">
              <div>
                <Link style={Style} to={`/${result.id}-${result.title.replaceAll(" ", "-")}`}>{result.title}</Link>
              </div>
              <div className="price">
                Rp.{calculatePay(result.vote_average)}
              </div>
              <div className="status">
                Status: Unowned
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="navButton">
        <div className="prevnextButton">
          {/* <Link style={Style} to={`/?page=${pageNum-1}`}>prev</Link> */}
          <button className="button" onClick={getprevPage}>prev</button>
        </div>
        <div>
          {/* <Link style={Style} to={`/?page=${pageNum+1}`}>next</Link> */}
          <button className="button" onClick={getnextPage}>next</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
