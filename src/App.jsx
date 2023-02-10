import 'react-tooltip/dist/react-tooltip.css'
import './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import { Routes, Route } from 'react-router-dom';
import Movies from './Pages/Movies';
import Saved from './Pages/Saved';
import Television from './Pages/Television';

function App() {

  return (
    <div className="App">
      <Search />
      <Navbar/>

    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/saved" element={<Saved/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/television" element={<Television/>}/>
    </Routes>

    </div>
  )
}

export default App


