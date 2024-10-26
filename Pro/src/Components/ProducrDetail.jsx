import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import "./ProducerDetail.css";
import Product from "./Product";


const ProducrDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const[realatedproducts,setRelatedProducts] = useState([])

  useEffect(() => {
    const Filterdata = items.filter((product) => product.id == id);
    console.log(Filterdata);

    setProduct(Filterdata[0]);


    const realatedproducts = items.filter((p)=>p.category === product.category)
    console.log("Related Catagories Are " , realatedproducts );
    
    setRelatedProducts(realatedproducts)
    
  }, [id,product.category]);

  return (
    <>
      <div className="container bhai ">
        <div className="img">
          <img src={product.imgsrc} alt="" />
        </div>

        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} ₹</button>
          <button className="btn btn-warning">Add To Cart</button>
        </div>
      </div>
      <h1 className="text-center">Related Products</h1>
    <Product items={realatedproducts}/>
      
    </>
  );
};

export default ProducrDetail;
