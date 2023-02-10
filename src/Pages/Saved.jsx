
import { useNavigate } from 'react-router-dom'

function Saved() {
  let navigate = useNavigate();

  function handleClick(){
    return navigate("/movie")
  }

  return (
    <div>
      <h1>Saved</h1>
      <button onClick={handleClick}>Movie page</button>
    </div>
  )
}


export default Saved