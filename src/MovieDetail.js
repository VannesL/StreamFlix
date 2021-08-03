import React, {useState, useEffect} from 'react';
import './App.css';
import MovieList from './MovieList';
import NumberFormat from 'react-number-format';

function Movie({match}) {

    const movieid = match.params.id.split('-')[0];

    useEffect(() => {
        fetchItems();
        
    }, [movieid]);

    const [movie, setMovies] = useState({});
    const [cast, setCast] = useState([]);
    const [recMovies, setrecMovies] = useState([]);
    const [simMovies, setsimMovies] = useState([]);

    

    const fetchItems = async () => {
        const detail = await fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=0bcbffad24fc8c3861fcf6e96088dd11&language=en-US`);
        
        const credits = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=0bcbffad24fc8c3861fcf6e96088dd11&language=en-US`);

        const recommend = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/recommendations?api_key=0bcbffad24fc8c3861fcf6e96088dd11&language=en-US`);

        const similar = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/similar?api_key=0bcbffad24fc8c3861fcf6e96088dd11&language=en-US`);
        
        const movie = await detail.json();
        const credit = await credits.json();
        const recMovie = await recommend.json();
        const simMovie = await similar.json();

        setMovies(movie);
        setCast(credit.cast)
        setrecMovies(recMovie.results)
        setsimMovies(simMovie.results)
        console.log(movie);
        console.log(credit.cast);
        console.log(recMovie.results);
        console.log(simMovie.results);
    }

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

    const price = calculatePay(movie.vote_average);

    return (
        <div>
            <div className="movieDetail">
                <img className="moviePoster" src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"+movie.poster_path} alt="" />
                
                <div className="movieInfo">
                    <div className="movieDesc">
                        <div className="title">{movie.title}</div>
                        <h3>{Math.floor(movie.runtime/60)}h {movie.runtime%60}m</h3>
                        <h3>{movie.overview}</h3>
                        <div className="rating">
                            Rating: <h2 className="coloring">{movie.vote_average}/10</h2>
                        </div>
                    </div>

                    <div className="movieBuy">
                        <div className="moviePrice">
                            <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                        </div>
                        <div className="buyButton">
                            <div className="button">Buy Now</div>
                        </div>
                    </div>

                    <div>
                        <h2 className="coloring">Cast:</h2>
                        <div className="castList">
                            {cast.map(actor =>(
                                <div className="actor" key={actor.id}>
                                    <div>
                                        <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"+actor.profile_path} alt="" />
                                    </div>
                                    <div className="actorDetails">
                                        {actor.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
            <div>
                <h2>Recomended Movies:</h2>
                <div className="movList">
                    {recMovies.map(recMovie =>(
                        <div className="mov" key={recMovie.id}>
                            <MovieList id={recMovie.id} poster_path={recMovie.poster_path} title={recMovie.title}/>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2>Similar Movies:</h2>
                <div className="movList">
                    {simMovies.map(simMovie =>(
                        <div className="mov" key={simMovie.id}>
                            <MovieList id={simMovie.id} poster_path={simMovie.poster_path} title={simMovie.title}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Movie;
