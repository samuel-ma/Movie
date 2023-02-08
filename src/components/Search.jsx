import React from 'react'
import "../styles/Search.css"
import { FaSearch, FaTags } from "react-icons/fa";
import Content from './Content';

function Search() {
  
  return (
    <div className='sc'>
      <div className='search'>
          <div className='input'>
              <input className='place' type="search" placeholder='Search movies..'/>
              <button className='sicon'>
                  <FaSearch />
              </button>
          </div>
          <button className='filter'>
              <FaTags />
          </button>
      </div>

      <Content/>
    </div>
  )
}

export default Search