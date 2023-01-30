import React from 'react'

const MovieCard = ({title, description, posterURL, rating}) => {
  return (
    <div>
        <img src={posterURL} alt="image" />
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{rating}</p>
    </div>
  )
}

export default MovieCard