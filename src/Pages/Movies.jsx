
import { useNavigate } from 'react-router-dom'

function Movies() {
  let navigate = useNavigate();

  function handleClick(){
    return navigate("/television")
  }

  return (
    <div>
      <h1>Movies</h1>
      <button onClick={handleClick}>Television page</button>
    </div>
  )
}

export default Movies