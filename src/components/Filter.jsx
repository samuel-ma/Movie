

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

export default Filter