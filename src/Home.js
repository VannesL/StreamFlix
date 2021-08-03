import React, {useState, useEffect} from 'react';
import './App.css';
import MoviePreview from './MoviePreview';

function Home({match}) {

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

  return (
    <div>
      <div className="movies">
        {results.map(result =>(
          <div className="movie" key={result.id}>
            <MoviePreview id={result.id} poster_path={result.poster_path} title={result.title} vote_average={result.vote_average}/>
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
