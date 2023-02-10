import "../styles/Content.css"
import MovieList from './MovieList'
import Add from "../components/Add"

function Content() {
  
  return (
    <form className='content'>
      <MovieList/>
      <Add/>
    </form>
  )
}

export default Content