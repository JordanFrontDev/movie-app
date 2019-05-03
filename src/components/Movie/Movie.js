import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../../config';
import Navigation from '../Navigation/Navigation';
import MovieInfo from '../MovieInfo/MovieInfo';
import MovieInfoBar from '../MovieInfoBar/MovieInfoBar';
import FourColGrid from '../FourColGrid/FourColGrid';
import Actor from '../Actor/Actor';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';
import './Movie.css';

const Movie = ({ match, location }) => {
    const [movie, setMovie] = useState();
    const [ actors, setActors ] = useState(null);
    const [ directors, setDirectors ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const endpoint = `${API_URL}movie/${match.params.movieId}?api_key=${API_KEY}&language=en-US`;
        fetchItems(endpoint);
    }, [])

    
    const fetchItems = async (endpoint) => {
        const data = await axios(endpoint);
        
        if(data.status_code) {
            setIsLoading(false);
        }else {
            setMovie(data);
            const endpoint = `${API_URL}movie/${match.params.movieId}/credits?api_key=${API_KEY}`;
            const credits = await axios(endpoint);
            const directors = credits.data.crew.filter((member) => member.job === 'Director');
            setActors(credits.data.cast);
            setDirectors(directors);
            setIsLoading(false);
        }
    }

    return (
        <div className='rmdb-movie'>
            {movie ? 
            <div>
                <Navigation movie={location.movieName} />
                <MovieInfo movie={movie.data} directors={directors} />
                <MovieInfoBar time={movie.data.runtime} budget={movie.data.budget}  revenue={movie.data.revenue}/>
            </div> : null}
            {actors ? 
            <div className='rmdb-movie-grid'>
                <FourColGrid header={'Actors'}>
                    {actors.map((actor, i) => {
                        return <Actor key={i} actor={actor} />
                    })}
               </FourColGrid>
            </div> : ''}
            {isLoading ? <Spinner /> : null}
        </div>
    );
};

export default Movie;