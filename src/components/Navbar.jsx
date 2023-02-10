import React from 'react'
import "../styles/Navbar.css"
import { AiFillClockCircle } from "react-icons/ai";
import { RiMacFill, RiHome6Fill, RiLogoutCircleRFill, RiMovie2Fill } from "react-icons/ri";
import { Tooltip } from 'react-tooltip'
import { useNavigate } from 'react-router-dom';

function Navbar() {

  let navigate = useNavigate()

  function homeNav(){
    return navigate('/home')
  }

  function movieNav(){
    return navigate('/movie')
  }

  function televisionNav(){
    return navigate('/television')
  }

  function savedNav(){
    return navigate('/saved')
  }

  return (
    <div className='navbar'>
      <div className='nav'>
        <div className='topnav'>
          Hive
        </div>

        <div className='midnav'>
          <div className='navicons' onClick={homeNav}>
            <p id="home-anchor-element"><RiHome6Fill /></p>
            <Tooltip anchorId="home-anchor-element" content="Home" place="right" />
          </div>

          <div className='navicons' onClick={movieNav}>
            <p id="movies-anchor-element"><RiMovie2Fill /></p>
            <Tooltip anchorId="movies-anchor-element" content="Movies" place="right" />
          </div>

          <div className='navicons' onClick={televisionNav}>
            <p id="mac-anchor-element"><RiMacFill /></p>
            <Tooltip anchorId="mac-anchor-element" content="Television" place="right" />
          </div>

          <div className='navicons' onClick={savedNav}>
            <p id="clock-anchor-element"><AiFillClockCircle /></p>
            <Tooltip anchorId="clock-anchor-element" content="Saved" place="right" />
          </div>

        </div>

        <div className='navicons'>
          <RiLogoutCircleRFill />
        </div>
      </div>
    </div>
  )
}

export default Navbar