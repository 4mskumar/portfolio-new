import { useState } from 'react'
import Home from './Pages/Home'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Home />
    </BrowserRouter>
    </>
  )
}

export default App