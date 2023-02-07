<<<<<<< HEAD

import "../styles/Filter.css"
import { useEffect } from "react"
import { FaTags } from "react-icons/fa";

function Filter({setActive}) {
  return (
    <button className="filt" onClick={() => setActive(35)}>
              <FaTags />
    </button>
  )
}

=======

import "../styles/Filter.css"
import { useEffect } from "react"
import { FaTags } from "react-icons/fa";

function Filter({setActive}) {
  return (
    <button className="filt" onClick={() => setActive(35)}>
              <FaTags />
    </button>
  )
}

>>>>>>> 8238654ae67ec2b82bdeed7b2151adf0334a77c8
export default Filter