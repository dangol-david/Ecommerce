import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CatData from "../Data/CatData";

function Products() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((a) => a.json())
      .then((res) => setData(res));
  }, []);

 


  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="pb-3 display-6 fw-bolder text-center pt-3">
            Latest Products
          </h1>
          <hr />

          <div className="row justify-content-center">
          <div className="buttons d-flex justify-content-center mb-5 pb-5">
            {CatData.map((a)=>(
              
               <button className="btn btn-outline-dark me-2 text-uppercase fw-bold"><Link to={`/cat/${a}`}>{a}</Link></button>
            ))}
         
          
        </div>
        
          {data.map((a)=>(
            
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4" key={a.id} >
                
                <img src={a.image} className="card-img-top " height="170px" alt="..." />

                <div className="card-body">
                  <Link to={`/detail/${a.id}`}>
                  <h5 className="card-title mb-0 fw-bolder">{a.title}</h5>
                  <p className="card-text pt-3 lead fw-bolder">
                    ${a.price}
                  </p>
                  <a href="#" className="btn btn-outline-dark">Buy Now</a>
                  </Link>
                </div>
                
              </div>
              </div>
            
            ))}
        
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
