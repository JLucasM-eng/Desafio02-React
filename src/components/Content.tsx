import { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {

movies : Array<MovieProps>
}
export function Content(props:ContentProps) {

  //const [movies, setMovies] = useState<MovieProps[]>([]);
 
  return(
    <main>
          <div className="movies-list">
            {props.movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
  )
}