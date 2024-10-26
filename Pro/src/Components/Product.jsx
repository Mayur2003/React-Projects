import React from "react";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Product = ({items,cart,setcart}) => {

  const Addtocart = (id,price,discription,imgsrc)=> {

    const obj = {
      id,price,discription,imgsrc
    }
    setcart([...cart,obj])
    console.log("Cart Elements Are",cart);

  
    toast.success('Your Item Is Succefully Added To Cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    
      });}


    
 

  return (
    <>

<ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>

      <div className="container my-5">
        <div className="row">
          {
            items.map((product)=> {
          // items.map((product) => {
            return (
              <>
                <div className="col-lg-4 col-md-6 my-3 text-center" key={product.id}>
                  <div className="card" style={{ width: "18rem" }}>

                    <Link to={`/product/${product.id}`} style={{
                      display : "flex",
                      justifyContent : "center",
                      alignItems : "center"
                    }}>
                    <div className="iop" style={{
                      height : "250px",
                      width : "100%"
                    }}>

                    <img
                      className="card-img-top"
                      src={product.imgsrc}
                      alt="Card image cap" 
                      style={{aspectRatio : "2/2"                 }}
                      />
                      </div>
                      </Link>
                    <div className="card-body" style={{
                      // height : "200px"
                    }}>
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text " style={{width : "24ch", textAlign : "center" , marginInline : "auto"}}>
                        {product.description}
                      </p>
                        <button className="btn btn-primary mx-3">{product.price } ₹</button>
                        <button 
                        onClick={()=>Addtocart(product.id,product.imgsrc,product.title,product.description,product.price)}
                        className="btn btn-warning">Add To Cart</button>

                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
