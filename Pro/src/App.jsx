import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import ProducrDetail from './Components/ProducrDetail'
import Serchitems from './Components/Serchitems'
import Cart from './Components/Cart'
import { items } from './Components/Data'
import Register from './Components/Register'
import Login from './Components/Login'
// import Login from './Components/Login'


export const Userlogin = createContext()


function App() {
  const [count, setCount] = useState(0)

  const[data,setData] = useState([...items])
  const[cart,setcart] = useState([])
  const[loginbutton,setloginbutton] = useState(false)

  return (
  <>
  <Userlogin.Provider value={{loginbutton,setloginbutton}}>

    <BrowserRouter>
    <Navbar cart={cart} setData={setData}/>
      <Routes>
        <Route path='/' element={<Product cart={cart} setcart={setcart} items={data}/>}></Route>
        <Route path='/product/:id' element={<ProducrDetail/>}></Route>
        <Route path='/serch/:term' element={<Serchitems/>}></Route>
        <Route path='/cart' element={<Cart cart={cart} setcart={setcart}/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        
        {/* <Route path='/login' element={<Login/>}></Route> */}


      </Routes>

    </BrowserRouter>

  </Userlogin.Provider>
    {/* <Product/> */}

  </>
  )
}

export default App
