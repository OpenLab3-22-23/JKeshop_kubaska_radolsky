import React from "react";
import { Link } from "react-router-dom";
import Product from "./Products";
import LandingPage from "./LandingPage";

const NavBar = () => { 
  
  return (
    <header>
      <nav>
        <ul>
          
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
         
        </ul>
      </nav>
    </header>
  );
};


export default NavBar;