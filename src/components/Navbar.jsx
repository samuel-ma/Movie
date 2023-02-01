import React from 'react'
import "../styles/Navbar.css"
import { AiFillClockCircle } from "react-icons/ai";
import { RiMacFill, RiHome6Fill, RiLogoutCircleRFill, RiMovie2Fill } from "react-icons/ri";

function Navbar() {
  return (
    <div className='navbar'>

      <div className='nav'>
        <div className='topnav'>
          Hive
        </div>
        
        <div className='midnav'>
          <div className='navicons'>
            <RiHome6Fill/>
          </div>

          <div className='navicons'>
            <RiMovie2Fill/>
          </div>

          <div className='navicons'>
            <RiMacFill/>
          </div>

          <div className='navicons'>
            <AiFillClockCircle/>
          </div>

        </div>

        <div className='navicons'>
            <RiLogoutCircleRFill/>
          </div>
      </div>

    </div>
  )
}

export default Navbar