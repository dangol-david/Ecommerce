import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductData from '../Data/ProductData'

function Category() {
  let {cid}=useParams()
  let d = ProductData.filter((a)=>a.category==cid)
  return (
    <>
      <div className="container py-3 text-center fw-bold text-uppercase mt-3 ">
       Latest Products
      </div><hr />
      <div className="row">
      {d.map((a)=>(
            
            <div className="col-md-3 mb-4">
              <div className="card h-80 text-center p-4 m-5" key={a} >
                
                <img src={a.image} className="card-img-top " height="170px" alt="..." />

                <div className="card-body">
                  
                  <h5 className="card-title mb-0 fw-bolder"> <Link to={`/detail/${a.id}`}>{a.title}</Link></h5>
                  <p className="card-text pt-3 lead fw-bolder">
                    ${a.price}
                  </p>
                  <a href="#" className="btn btn-outline-dark">Buy Now</a>
                 
                </div>
                
              </div>
              </div>
            
            ))}
      </div>
    </>
  )
}

export default Category
