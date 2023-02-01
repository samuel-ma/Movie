import React from 'react'
import "../styles/Navbar.css"
import { AiFillClockCircle } from "react-icons/ai";
import { RiMacFill, RiHome6Fill, RiLogoutCircleRFill, RiMovie2Fill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";

function Navbar() {
  return (
    <div className='navbar'>

      <div className='topnav'>
        EyeFlix
      </div>
      
      <div className='midnav'>
        <div className='navicons'>
          <RiHome6Fill/>
          <p className='navt'>Home</p>
        </div>

        <div className='navicons'>
          <RiMovie2Fill/>
          <p className='navt'>Movie</p>
        </div>

        <div className='navicons'>
          <RiMacFill/>
          <p className='navt'>TV</p>
        </div>

        <div className='navicons'>
          <AiFillClockCircle/>
          <p className='navt'>Watch</p>
        </div>

        <div className='navicons'>
          <FaCalendarAlt/>
          <p className='navt'>History</p>
        </div>
      </div>

      <div className='navicons'>
          <RiLogoutCircleRFill/>
          <p className='navt'>Logout</p>
        </div>

    </div>
  )
}

export default Navbar