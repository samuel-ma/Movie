
import { useNavigate } from 'react-router-dom'

function Television() {
  let navigate = useNavigate();

  function handleClick(){
    return navigate("/saved")
  }

  return (
    <div>
      <h1>Television</h1>
      <Button onClick={handleClick}>Saved page</Button>
    </div>
  )
}

export default Television