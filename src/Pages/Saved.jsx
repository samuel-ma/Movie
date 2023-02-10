
import { Link } from 'react-router-dom'

function Saved() {
  return (
    <div>
      <Link to="home">Home page</Link>
      <Link to="saved">Saved page</Link>
      <Link to="television">Television page</Link>
      <Link to="movies">Movies page</Link>
      <h1>Saved</h1>
    </div>
  )
}

export default Saved