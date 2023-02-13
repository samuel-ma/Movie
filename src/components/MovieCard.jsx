import "../styles/MovieCard.css"
import { BsStarFill } from "react-icons/bs";

const MovieCard = ({overview,path,title,vote_average}) => {
  return (
      <div className="card">
          <img className="poster" src={path} alt="image" />
          <h1 className="title">{title}</h1>
          <p className="descr">{overview.length < 130 ? overview : `${overview.slice(0, 130)}...`}</p>
          <div className="rate">
              <p className="rating">{vote_average}</p>
              <BsStarFill/>
          </div>
      </div>
  )
}

export default MovieCard
