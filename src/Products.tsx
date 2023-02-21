import NavBar from "./NavBar";
import React, { useEffect } from "react";
import LandingPage from "./LandingPage";
import { supabase } from "./supabase/supabaseClient";


const Product = ( ) => {
  useEffect (()=>{
    async function fetchproducts() {
      const res = await supabase
        .storage
        .from('productimages').getPublicUrl("hoodie.png")
        console.log(res)
    }
    fetchproducts()
  },[])  
  return (
      <div>
        
      <header>
      <img style={{ width: 100, height: 100 }} src="src/img/jak.png" alt="j&k"/>
        <NavBar />
      </header>
        <main>
        <img src="src/img/hoodie.png" alt="Shrooms"/>
        <h3>Black Hoodie</h3>
        <p>20eka</p>
        <img style={{ width: 450, height: 450 }} src="src/img/shirt.png" alt="Shrooms" />
        <h3>Black Tričenko</h3>
        <p>10eka</p>
        </main>
      </div>
    );
  };

  
export default Product;