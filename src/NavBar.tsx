import React from "react";
import { Link } from "react-router-dom";
import Product from "./Products";
import LandingPage from "./LandingPage";
import ShoppingCart from "./ShoppingCart";
import MyCart from "./MyCart";

const NavBar = () => { 
  
  return (
    <header>
      <Link to="/LandingPage">
         <img style={{ width: 100, height: 100 }} src="src/img/jak.png" alt="j&k" className="jak"/>
      </Link>
      
      <nav>
        <ul>
           
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          
          <Link to="/MyCart">
          <ShoppingCart />
          </Link>
        </ul>
      </nav>
    </header>
  );
};


export default NavBar;