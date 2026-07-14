import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Project from './components/Project'
import(link, Routes, Route) from 'react-router-dom'

function App() {
  return (
    <div classname="App">
      <>
        <nav>
          <link to="/">Home</link>
          <link to="/about">About</link>
          <link to="/contact">Contact</link>
          <link to="/project">Project</link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />

        </Routes>


      </>
      )
      {'}'}

      export default App
