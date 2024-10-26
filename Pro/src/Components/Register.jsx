

  



 import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Register() {

  const[name,setname] = useState("")
  const[email,setemail] = useState("")
  const[password,setpassword] = useState("")
  const[cpassword,setcpassword] = useState("")

  const navigate = useNavigate()

  const canlogin = name.length == 0 || email.length == 0 || password.length == 0 || cpassword.length == 0
    const HadleRagister = () => {

      const jsondata = {name,email,password}

      fetch("http://localhost:3000/logindata",{
        method : "post",
        headers :  {"content-type" : "application/json"},
        body : JSON.stringify(jsondata)
      }).then((res)=>{
        if(res)
        {
          alert("Registration  Succesfully")
          navigate("/login")

        }
      })


    }

  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' value={name} onChange={(e)=>setname(e.target.value)} type='text' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' value={email} onChange={(e)=>setemail(e.target.value)} id='form2' type='email'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' value={password} onChange={(e)=>setpassword(e.target.value)} type='password'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' value={cpassword} onChange={(e)=>setcpassword(e.target.value)} id='form4' type='password'/>
              </div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='mb-4' disabled={canlogin} size='lg' onClick={HadleRagister}>Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Register;