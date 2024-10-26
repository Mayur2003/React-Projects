import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

    const Mayur  = useSelector((state)=>state.Users)
    // console.log(Mayur);
    


  return (
    <>
        <h2>Redux Crud Application With Js File </h2>
        <Link to="/add" className='btn btn-primary'>Add New</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id :- </th>
                    <th>Name :- </th>
                    <th>E-mail :- </th>
                    <th>Actions :-</th>
                </tr>
            </thead>

            <tbody>
                {
                    Mayur.map((user,index)=> (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button className='btn btn-primary'>Edit</button></td>
                            <td><button className='btn btn-danger'>Delete</button></td>
                            {/* <td><button className='btn btn-primary'>Edit</button></td> */}


                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
  )
}

export default Home