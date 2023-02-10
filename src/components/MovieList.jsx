

import {useState, useEffect} from 'react'
import "../styles/MovieList.css"
import MovieCard from './MovieCard';

const MovieList = () => {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
}, [])

const fetchPopular = async() => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=a3985284ae4c1570e3b3123fced85f63&language=en-US&page=1")
    const movies = await data.json()
    setPopular(movies.results)
  }

  return (
    <div className="list">
        {popular.map((movie) => {
            return <MovieCard key={movie.id} movie={movie}/>
        })}
    </div>
  )
}

export default MovieList