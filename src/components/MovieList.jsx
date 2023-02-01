import {useState, useEffect} from 'react'
import MovieCard from './MovieCard';
import tmdb from '../api/tmdb';

const MovieList = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async() => {
      const {data} = await tmdb.get("tv/popular")
      setMovies(data.results)
    }

    fetchMovies();
  }, [])
  
  return (
    <div>
      {movies.map((movie,index) => {
        return <MovieCard key={index} {...movie} />
      })}
    </div>
  )
}

export default MovieList