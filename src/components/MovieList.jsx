<<<<<<< HEAD
import {useState, useEffect} from 'react'
import tmdb from '../api/tmdb';
import "../styles/MovieList.css"
import MovieCard from './MovieCard';

const MovieList = () => {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    fetchPopular();
}, [])

const fetchPopular = async() => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=a3985284ae4c1570e3b3123fced85f63&language=en-US&page=1")
    const movies = await data.json()
    setPopular(movies.results)
    setFiltered(movies.results)
  }

  return (
    <div className="list">
        {popular.map(movie => {
            return <MovieCard key={movie.id} movie={movie}/>
        })}
    </div>
  )
}

=======
import {useState, useEffect} from 'react'
import tmdb from '../api/tmdb';
import "../styles/MovieList.css"
import MovieCard from './MovieCard';

const MovieList = () => {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    fetchPopular();
}, [])

const fetchPopular = async() => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=a3985284ae4c1570e3b3123fced85f63&language=en-US&page=1")
    const movies = await data.json()
    setPopular(movies.results)
    setFiltered(movies.results)
  }

  return (
    <div className="list">
        {popular.map(movie => {
            return <MovieCard key={movie.id} movie={movie}/>
        })}
    </div>
  )
}

>>>>>>> 8238654ae67ec2b82bdeed7b2151adf0334a77c8
export default MovieList