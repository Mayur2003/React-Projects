import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { Userlogin } from '../App'


const Login = () => {

  const [username,usernameupdate] = useState("")
  const [password,passwordupdate] = useState("")
  const[store,setStore] = useState()

  let {loginbutton,setloginbutton} = useContext(Userlogin)

  const nav = useNavigate()

  const canlogin = username.length == 0 || password.length == 0

  useEffect(()=>{
    fetch("http://localhost:3000/logindata").then((res)=> {return res.json()}).then((data)=>setStore(data))
  })


  const ProceedLogin = (e) => {
    e.preventDefault()
    const x = store.find(s => s.name == username && s.password == password)

    if(x)
    {
      alert("Login Succesfully")
      nav("/")
      setloginbutton(true)
    }
    else
    {
        alert("registration Please")
        nav("/register")
    }
  }

  return (
    <div>
        <div className="row align-items-center py-5">
          <div className=" col ofset-lg-3 col-lg-6">
            <form onSubmit={ProceedLogin} className='container'>
              <div className="card">
                <div className="card-header">
                    <h2>User Login</h2>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label>User Name <span className='errmsg'>*</span></label>
                    <input value={username} onChange={(e)=>usernameupdate(e.target.value)}  className='form-control' />
                  </div>
                  <div className="form-group">
                    <label>Password <span className='errmsg'>*</span></label>
                    <input value={password} onChange={(e)=>passwordupdate(e.target.value)}  className='form-control' />
                  </div>
                  
                </div>
                <div className="card-footer">
                  <button disabled={canlogin} type='submit' className='btn btn-primary me-4'>Login</button>
                  <Link className='btn btn-success' to="/register">New User</Link>
                  
                </div>
              </div>
            </form>
          </div>
        </div>



    </div>
  )
}

export default Login