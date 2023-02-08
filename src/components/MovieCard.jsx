import "../styles/MovieCard.css"
import { BsStarFill } from "react-icons/bs";

const MovieCard = ({movie}) => {
  return (
    <div className="card">
        <img className="poster" src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt="image" />
        <h1 className="title">{movie.title}</h1>
        <p className="descr">{movie.overview.length < 130 ? movie.overview : `${movie.overview.slice(0, 130)}...`}</p>
        <div className="rate">
          <p className="rating">{movie.vote_average}</p>
          <BsStarFill/>
        </div>
    </div>
  )
}

export default MovieCard