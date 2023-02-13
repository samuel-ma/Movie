import "../styles/Content.css"
import MovieList from './MovieList'
import Add from "../components/Add"
import {useState} from "react";

function Content() {
    const [newcards, setnewcards] = useState([]);
    function addnewcard(movie) {
        console.log(movie)
        setnewcards([...newcards, movie]);
    }
  return (
    <form className='content'>
      <MovieList newcards={newcards} />
      <Add setnewcards={addnewcard}/>
    </form>
  )
}

export default Content
