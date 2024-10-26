import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddUser from './AddUser'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<AddUser/>}></Route>
      </Routes>
    </BrowserRouter>

    {/* <Home/> */}
  </>
  )
}

export default App
