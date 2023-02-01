import "../styles/MovieCard.css"
import { BsStarFill } from "react-icons/bs";

const MovieCard = ({title, description, posterURL, rating}) => {
  return (
    <div className="card">
        <img className="poster" src={posterURL} alt="image" />
        <h1 className="title">{title}</h1>
        <p className="descr">{description}</p>
        <div className="rate">
          <p className="rating">{rating}</p>
          <BsStarFill/>
        </div>
    </div>
  )
}

export default MovieCard