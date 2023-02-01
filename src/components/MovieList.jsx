// import axios from 'axios';
// import {useState, useEffect} from 'react'
// import tmdb from '../api/tmdb';
import "../styles/MovieList.css"
import MovieCard from './MovieCard';
import p1 from "../assets/p (1).jpg";
import p2 from "../assets/p (2).jpg";
import p3 from "../assets/p (3).jpg";
import p4 from "../assets/p (4).jpg";
import p5 from "../assets/p (5).jpg";
import p6 from "../assets/p (6).jpg";
import p7 from "../assets/p (7).jpg";
import p8 from "../assets/p (8).jpg";

const MovieList = () => {

  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const fetchMovies = axios.get("https://api.themoviedb.org/3/movie/550?api_key=a3985284ae4c1570e3b3123fced85f63").then((res) => console.log(res)).catch((err) => console.log(err));
  //   console.log(fetchMovies);
  // }, [])

  const movies = {
      title: "Narnia",
      rating: 4.5,
      description: "This is the desscription of the above movie whatever it might be"
  }

  const movies2 = {
      title: "Black Adam",
      rating: 4.2,
      description: "This is the desscription of the above movie whatever it might be"
  }

  const movies3 = {
      title: "Glass Onion",
      rating: 4.8,
      description: "This is the desscription of the above movie whatever it might be"
  }

  const movies4 = {
      title: "Devotion",
      rating: 3.5,
      description: "This is the desscription of the above movie whatever it might be"
  }

  return (
    <div className="list">
        <MovieCard title={movies.title} posterURL={p1} rating={movies.rating} description={movies.description} />
        <MovieCard title={movies2.title} posterURL={p2} rating={movies2.rating} description={movies2.description} />
        <MovieCard title={movies3.title} posterURL={p3} rating={movies3.rating} description={movies3.description} />
        <MovieCard title={movies4.title} posterURL={p4} rating={movies4.rating} description={movies4.description} />
        <MovieCard title={movies.title} posterURL={p5} rating={movies.rating} description={movies.description} />
        <MovieCard title={movies2.title} posterURL={p6} rating={movies2.rating} description={movies2.description} />
        <MovieCard title={movies.title} posterURL={p7} rating={movies.rating} description={movies.description} />
        <MovieCard title={movies2.title} posterURL={p8} rating={movies2.rating} description={movies2.description} />
    </div>
  )
}

export default MovieList