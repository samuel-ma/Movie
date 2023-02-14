
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
              return <MovieCard video={movie.video} key={movie.id} movie={movie} overview={movie.overview} path={"https://image.tmdb.org/t/p/w500"+movie.backdrop_path} vote_average={movie.vote_average} title={movie.title}/>
          })}
      </div>
  )
}

export default MovieList
