import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adduser } from './reducer'
import { useDispatch } from 'react-redux'



const AddUser = () => {
    const[name,setname] = useState("")
    const[email,setemail] = useState("")
    
    const dispatch = useDispatch();
    const navigate = useNavigate()


    // const Handlesubmit = (e) => {

    //     e.preventDefault;
    //     console.log(name,email);


        
    // }
    // onSubmit={Handlesubmit(e)}

    const HandleSubmit = (e) => {
        e.preventDefault();
        dispatch(adduser({name,email}))
        console.log(name,email);
        navigate('/')
        
    }

  return (
    <>
        <form action="" onSubmit={HandleSubmit}>
            <h2>Add New User</h2>
            <div>
                <label htmlFor="">Enter Your Name :- </label>
                <input type="text" placeholder='Enter Your Name' value={name} onChange={(e)=>setname(e.target.value)} />
            </div>

            <div className='mt-2'>
                <label htmlFor="">Enter Your E-mail :- </label>
                <input type="text" placeholder='Enter Your E-mail Address' value={email} onChange={(e)=>setemail(e.target.value)} />
            </div>

            <div className='mt-3'>
                <button className='btn  btn-warning'>Submit</button>
            </div>

        </form>
    
    </>
  )
}

export default AddUser