import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import New from './Components/New'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <New/>
    </>
  )
}

export default App
