import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Userlogin } from '../App'

const Header = () => {

  const nav = useNavigate()
  let {loginbtn,setLoginbtn} = useContext(Userlogin)

  const LogoutHand = () => {
    setLoginbtn(false)
    confirm("Are You Sure To Logout ? ")
    nav("/")
    console.log("logouthandler0",loginbtn);
    
  }

  return (
    <>
  
        <div>

    <header className="header-area header-sticky">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <nav className="main-nav">
          {/* ***** Logo Start ***** */}
          <a href="index.html" className="logo">
            <h1>Villa</h1>
          </a>
          {/* ***** Logo End ***** */}
          {/* ***** Menu Start ***** */}
          <ul className="nav">
            <li> <Link to="/">Home</Link> </li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/propertiesdata">Property Detailes</Link></li>
            <li><Link to="/contact">Contact</Link></li>
           {
              loginbtn ? <>
                
                <li>
                  <Link  onClick={LogoutHand}>Log Out</Link>
                {/* <button className='btn btn-primary' onClick={LogoutHand}>Logout</button> */}
                </li>
              </> :
              <>
              <li><Link to="/register"> Register </Link></li>
              <li><Link to="/login"> Login </Link></li>
              </>
           }
            
            {/* <li><a href="property-details.html">Property Details</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="#"><i className="fa fa-calendar" /> Schedule a visit</a></li> */}
            <li><a href="#"><i className="fa fa-calendar" /> Schedule a visit</a></li>
         
          </ul>   
          <a className="menu-trigger">
            <span>Menu</span>
          </a>
          {/* ***** Menu End ***** */}
        </nav>
      </div>
    </div>
  </div>
</header>


        </div>
    
    
    </>
  )
}

export default Header