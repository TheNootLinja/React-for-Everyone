import { useState, useEffect } from 'react';
import { Movie } from './Movie.js';
import { Filter } from '../Filter.js';

const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=bd5d8ee62a1a0d97362d3c5924713f9a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

export function MoviesList() {
    const [filter, setFilter] = useState("");
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        try {
            const res = await fetch(API_URL);
            const movies = await res.json();
            setMovies(movies.results);
            console.log(movies);
        } catch (e) {
            console.error(e)
        }
    }

    useEffect( () => {
        fetchMovies();
    }, [])

    return (
        <div>
            <Filter filter={filter} setFilter={setFilter}/>
            <ul>
                { movies.filter(movie => 
                movie.title.toLowerCase()
                .includes(filter.toLowerCase()))
                .map(( movie ) =>
                    (
                        <Movie movie={movie} key={movie.id}/>
                    )
                )}
            </ul>
        </div>
    )
}