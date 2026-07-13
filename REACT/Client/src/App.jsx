import { useState } from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Newtask from './Components/newtask'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
   <Newtask/>

   <Footer/>
   </>
  )
}

export default App
