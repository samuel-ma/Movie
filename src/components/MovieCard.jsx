import "../styles/MovieCard.css"

const MovieCard = ({title, description, posterURL, rating}) => {
  return (
    <div className="card">
        <img className="poster" src={posterURL} alt="image" />
        <h1 className="title">{title}</h1>
        <p className="descr">{description}</p>
        <p className="rating">{rating}</p>
    </div>
  )
}

export default MovieCard