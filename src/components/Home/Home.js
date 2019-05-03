import React, { useState, useEffect } from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config';
import HeroImage from '../HeroImage/HeroImage';
import SearchBar from '../SearchBar/SearchBar';
import FourColGrid from '../FourColGrid/FourColGrid';
import MovieThumb from '../MovieThumb/MovieThumb';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';
import './Home.css';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [heroImage, setHeroImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState('');

    useEffect(() => {
        setIsLoading(true);
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        getMovies(endpoint);
    }, []);
    
    
    const getMovies = async (data) => {
        try {
            const popularMovies = await axios(data);
            
            setMovies([...movies, ...popularMovies.data.results]);
            setHeroImage(heroImage || popularMovies.data.results[0]);
            setIsLoading(false);
            setCurrentPage(popularMovies.data.page);
            console.log(popularMovies);
            setTotalPages(popularMovies.data.total_pages);
        } catch (e) {
            console.log(e);
        }
    };

    const loadMoreItems = () => {
        let endpoint = '';
        setIsLoading(true);

        if (search === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`;
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${currentPage + 1}`;
                        
        }
        getMovies(endpoint);
    };


    const searchItems = (e) => {
        const searchTerm = e.target.value;
        console.log(searchTerm);
        let endpoint = '';
        setMovies([]);
        setIsLoading(true);
        setSearch(searchTerm);

        if(searchTerm === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}$language=en-US&page=${currentPage + 1}`;

        }else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
        }

        getMovies(endpoint);

    }


    return (
        <div className='rmdb-home'>
        {heroImage ?
        <div>
        <HeroImage  
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
            title={heroImage.original_title}
            text={heroImage.overview}
        /> 
        <SearchBar searchItems={searchItems}/> 

        </div> : null }
            <div className='rmdb-home-grid'>
                <FourColGrid 
                    header={search ? 'Search Result' : 'Popular Movies'}
                    isLoading={isLoading}
                >
                    {movies.map((movie, i) => {
                        return <MovieThumb 
                            key={i}
                            clickable={true}
                            image={movie.poster_path 
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : './images/no_image.jpg'}
                            movieId={movie.id}
                            movieName={movie.original_title}
                        />
                    })}
               </FourColGrid>
               {isLoading ? <Spinner /> : null}
               {(currentPage <= totalPages && !isLoading) 
                ? <LoadMoreBtn text={'Load More'} onClick={loadMoreItems}/>
                : null}
            </div>
        </div>
    );
}

export default Home;