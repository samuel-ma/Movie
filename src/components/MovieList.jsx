import axios from 'axios';
import {useState, useEffect} from 'react'
import tmdb from '../api/tmdb';
import MovieCard from './MovieCard';

const MovieList = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = axios.get("https://api.themoviedb.org/3/movie/550?api_key=a3985284ae4c1570e3b3123fced85f63").then((res) => console.log(res)).catch((err) => console.log(err));
    console.log(fetchMovies);
  }, [])


  return (
    <div>
      {movies.map((items) => {
        <MovieCard/>
      })}
    </div>
  )
}

export default MovieList