import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Properties from './Components/Properties'
import Home from './Components/Home'
import PropertiesData from './Components/PropertiesData'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Login from './Components/Login'
import { Proprtydata } from './Components/data'
import Pdetail from './Components/pdetail'
import Register from './Components/Register'

export const Userlogin = createContext();

function App() {
  const [count, setCount] = useState(0)
  const[data,setData] = useState([...Proprtydata])
  // console.log(data);
  const[loginbtn,setLoginbtn] = useState(false)
  

  return (
    <>
      <Userlogin.Provider value={{loginbtn,setLoginbtn}}>


        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/properties' setData={setData}  data={data} element={<Properties/>} ></Route>
            <Route path='/propertiesdata' element={<PropertiesData/>}></Route>
            <Route path='/product/:id' element={<Pdetail/>}></Route> 
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>

          </Routes>
        <Footer/>
        </BrowserRouter>
      </Userlogin.Provider>
    </>
  )
}

export default App
