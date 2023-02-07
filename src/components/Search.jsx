

import {useState, useEffect} from 'react'
import "../styles/Search.css"
import { FaSearch } from "react-icons/fa";
import Content from './Content';
import Filter from './Filter';

const [pop, setPop] = useState([]);
const [filtered, setFiltered] = useState([]);
const [active, setActive] = useState(0);

useEffect(() => {
  fetchPopular();
}, [])

const fetchPopular = async() => {
  const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=a3985284ae4c1570e3b3123fced85f63&language=en-US&page=1")
  const movies = await data.json()
  setPop(movies.results)
  setFiltered(movies.results)
  console.log(pop);
  console.log(filtered);
}

function Search() {
  return (
    <div className='sc'>
      <div className='search'>
          <div className='input'>
              <input className='place' type="text" placeholder='Search movies..'/>
              <button className='sicon'>
                  <FaSearch />
              </button>
          </div>
          <button className='filter'>
            <Filter popular={popular} setFiltered={setFiltered} active={active} setActive={setActive}/>
          </button>
      </div>

      <Content/>
    </div>
  )
}

export default Search