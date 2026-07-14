import './App.css'

import {Link, Routes, Route} from 'react-router-dom'
import About from './Components/About'

function App() {
  return (
    <div classname="App">
      <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/project">Project</Link>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<About />} />
          

        </Routes>


      </>
    </div>
  )
}



export default App
