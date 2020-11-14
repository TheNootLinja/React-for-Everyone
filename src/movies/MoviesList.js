import { useState } from 'react';
import { Movie } from './Movie.js';
import { Filter } from '../Filter.js';

const movies = [
    {
        name: "36th Chamber"
    },
    {
        name: "5 Deadly Venoms"
    },
    {
        name: "Man of Iron"
    },
    {
        name: "Boop the Snoot"
    },
]

export function MoviesList() {

    const [filter, setFilter] = useState("")

    return (
        <div>
            <Filter filter={filter} setFilter={setFilter}/>
            <ul>
                { movies.filter(movie => 
                movie.name.toLowerCase()
                .includes(filter.toLowerCase()))
                .map(( movie ) =>
                    (
                        <Movie movie={movie} key={movie.name}/>
                    )
                )}
            </ul>
        </div>
    )
}