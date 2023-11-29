import React from "react";
import { useParams } from "react-router-dom";
import ProductData from "../Data/ProductData";

function Details() {
  let {id} = useParams();
  let y = ProductData.find((a) => a.id == id);
  return (
    <>
      <div className="container">
        
          <h3 className="text-center p-4 text-danger">Product Details</h3>
      <div className="row border ">
        <div className="col-4">
          <img src={y.image} className="w-100" alt="" />

        </div>
        <div className="col-8 fw-bold p-5">
          <p>{y.title}</p>
          <p>{y.description}</p>
          <p>${y.price}</p>
          
        </div>
      </div>
      </div>
    </>
  );
}

export default Details;
