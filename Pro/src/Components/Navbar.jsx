import React, { useContext, useState } from 'react'
import "./Nabnar.css"
import { Link, useNavigate } from 'react-router-dom'
import { items } from './Data'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from "@auth0/auth0-react";
import { Userlogin } from '../App';


const Navbar = ({setData,cart}) => {

  const {loginbutton,setloginbutton} = useContext(Userlogin)

  const navigate = useNavigate()
  const { loginWithRedirect , logout , isAuthenticated , user } = useAuth0();

  const[serchterm,setSerchterm] = useState("")

  const navigation = useNavigate()


  const LogoutHand = () => {
    setloginbutton(false)
    confirm("Are You Sure To Log Out ?? ")
    navigation("/")
    console.log("logouthandler0",loginbtn);
  }

  const Filterbycatagoery = (catagory,cart) => {
      const element = items.filter((pro)=>pro.category === catagory)
      console.log(
        element
      );
      
      setData(element) 


     
  }

  const Filterbyprice = (price) => {
    const pre = items.filter((pro)=>pro.price >= price)
    console.log(pre);
    setData(pre)
    
  }

  const Handlesubmit  =   (e) => {
      e.preventDefault();
      console.log(serchterm);
      navigate(`/serch/${serchterm}`)
      setSerchterm("")
      

  } 

  return (
    <>
    
        <header className='sticky-top'>
                <div className="nav">
                <Link to="/" className="brand text-dark"> S.K. Mobile Hub </Link   >
                <form className="serch-bar" onSubmit={  Handlesubmit}> 
                  <input type="text"
                   placeholder='Serch Your Products'
                   value={serchterm}
                   onChange={(e)=>setSerchterm(e.target.value)} /> </form>
                {/* <div className="cart"> Cart </div>
                 */}
                
                 <div >
                    {
                      isAuthenticated && <p>{user.name}</p>
                    }
                
                {/* <button className='btn btn-warning mx-2'>Login</button> */}
                {
              loginbutton ? <>
                
                {/* <li> */}
                  <Link  onClick={LogoutHand} className='btn btn-danger me-4'>Log Out</Link>
                {/* <button className='btn btn-primary' onClick={LogoutHand}>Logout</button> */}
                {/* </li> */}
              </> :
              <>
             <Link to="/register" className='btn btn-primary me-4'> Register </Link>
             <Link to="/login" className='btn btn-warning me-4'> Login </Link>
              </>
           }


                  {/* {
                   
                  } */}

                 


                 


                 <Link to="/cart" className='cart'>
                 <Button variant="primary">
      Cart <Badge bg="secondary">{cart.length}</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
                 
                 </Link>
                 </div>
                </div>
        </header>

        <div className="navbar-wrapper">
            <div className="items"> Filter By {"->"} </div>
            <div className="items" onClick={()=>setData(items)}> No Filter </div>
            <div className="items" onClick={()=>Filterbycatagoery("mobiles")}> Mobiles </div>
            <div className="items" onClick={()=>Filterbycatagoery("laptops")}> Laptops </div>
            <div className="items"> Tablets </div>
            <div  onClick={()=>Filterbyprice(29999)} className="items"> {">="} 29999  </div>
            <div onClick={()=>Filterbyprice(49999)} className="items"> {">="} 49999  </div>
            <div  onClick={()=>Filterbyprice(69999)}className="items"> {">="} 69999  </div>
            <div  onClick={()=>Filterbyprice(89999)}className="items"> {">="} 89999  </div>

         
        </div>
    
    </>
  )
}

export default Navbar

