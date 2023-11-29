import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Products from './Products'
import Home from "./Home";
import Details from "../Pages/Details";
import Category from "../Pages/Category"

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
           NepaKart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                 Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Contact
                </a>
              </li>
             </ul>
            <div className="buttons">
              
                <a href="" className="btn btn-outline-dark">
                  <i className="fa fa-sign-in px-2 gap-2 me-1">   Login</i>
                </a>
                <a href="" className="btn btn-outline-dark  ms-2">
                  <i className="fa fa-user-plus px-2 gap-2 me-1">   Register</i>
                </a>
                <a href="" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-shopping-cart px-2 gap-2 me-1">   Cart (0)</i>
                </a>
            </div>
          </div>
        </div>
      </nav>  
      <Home/>                                                                                                                                                                                                                         
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/cat/:cid" element={<Category/>}/>
        <Route path="/detail/:id" element={<Details/>}/>
      </Routes>
    </>
  );
}

export default Navbar;
