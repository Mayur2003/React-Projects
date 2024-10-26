import React from 'react'

const Cart = ({cart,setcart}) => {
  return (
    <>
        <div className="container">

          {
            cart.map((product)=> {
              <div className="card mb-3" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={product.imgsrc} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text"> {product.discription}</p>
        {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
      </div>
    </div>
  </div>
</div>

            })
          }


        </div>
    
    
    
    
    </>
  )
}

export default Cart