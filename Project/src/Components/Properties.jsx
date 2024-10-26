import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Proprtydata } from './data'
import { Link, useNavigate } from 'react-router-dom'


const Properties = () => {
   const[data,setData] = useState([...Proprtydata])
    // console.log(data)
    // console.log(data);
    
    console.log(data);
    
  

  
  



  // const Lo = useSelector((state)=>state.users)
  // console.log(Lo);
  
  

  const Filterbycatagoery = (catagory) => {
    const element = Proprtydata.filter((pro)=>pro.category == catagory)
    console.log(
      element
    );
    
   setData(element)

   
   
}

  return (
    <>
        <div>


<div>
  <div className="page-heading header-text">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <span className="breadcrumb"><a href="#">Home</a> / Properties</span>
          <h3>Properties</h3>
        </div>
      </div>
    </div>
  </div>
  <div className="section properties">
    <div className="container">
      <ul className="properties-filter">
        <li>
          <a className="is_active" href="#!" onClick={()=>setData(Proprtydata)}>Show All</a>
        </li>
        <li>
          <a href="#!"  onClick={()=>Filterbycatagoery("Apartment")}>Apartment</a>
        </li>
        <li>
          <a href="#!"   onClick={()=>Filterbycatagoery("Villa")}>Villa House</a>
        </li>
        <li>
          <a href="#!"   onClick={()=>Filterbycatagoery("PentHouse")}>Penthouse</a>
        </li>
      </ul>
      <div className="row properties-box">
        {
          data.map((value,index)=> (

          // ))
          // Lo.map((value,index)=>(

            // -------------------------------

            
            <div  key={index}  className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv">
              {/* <Link to={`/product/${product.id}`}></Link> */}
          <div className="item">
            <Link to={`/product/${value.id}`}>
            <img src={value.imgsrc}  />
            </Link>
            <span className="category">Luxury Villa</span>
            <h6>{value.price}</h6>
            <h4>{value.title}</h4>
            <ul>
              <li>Bedrooms: <span>{value.Bedrooms}</span></li>
              <li>Bathrooms: <span>{value.Bathrooms}</span></li>
              <li>Area: <span>{value.Area}</span></li>
              <li>Floor: <span>{value.Floor}</span></li>
              <li>Parking: <span>{value.parking}</span></li>
            </ul>
            <div className="main-button">
              Schedule a visit
            </div>
          </div>
        </div>
// ---------------------------------------------
          ))
        }
        
       
       
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="pagination">
            <li><a href="#">1</a></li>
            <li><a className="is_active" href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">&gt;&gt;</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>




        </div>
    
    
    </>
  )
}

export default Properties