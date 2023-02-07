import React from 'react'
import "../styles/Navbar.css"
import { AiFillClockCircle } from "react-icons/ai";
import { RiMacFill, RiHome6Fill, RiLogoutCircleRFill, RiMovie2Fill } from "react-icons/ri";
import { Tooltip } from 'react-tooltip'

function Navbar() {

  return (
    <div className='navbar'>
      <div className='nav'>
        <div className='topnav'>
          Hive
        </div>

        <div className='midnav'>
          <div className='navicons'>
            <p id="home-anchor-element"><RiHome6Fill /></p>
            <Tooltip anchorId="home-anchor-element" content="Home" place="right" />
          </div>

          <div className='navicons'>
            <p id="movies-anchor-element"><RiMovie2Fill /></p>
            <Tooltip anchorId="movies-anchor-element" content="Movies" place="right" />
          </div>

          <div className='navicons'>
            <p id="mac-anchor-element"><RiMacFill /></p>
            <Tooltip anchorId="mac-anchor-element" content="Mac" place="right" />
          </div>

          <div className='navicons'>
            <p id="clock-anchor-element"><AiFillClockCircle /></p>
            <Tooltip anchorId="clock-anchor-element" content="Clock" place="right" />
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