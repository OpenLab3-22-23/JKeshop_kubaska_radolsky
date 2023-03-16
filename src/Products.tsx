import NavBar from "./NavBar";
import React, { useEffect } from "react";
import LandingPage from "./LandingPage";
import { supabase } from "./supabase/supabaseClient";


const Product = () => {
  useEffect(() => {
    async function fetchproducts() {
      const res = await supabase
        .storage
        .from('productimages').getPublicUrl("hoodie.png")
      console.log(res)
    }
    fetchproducts()
  }, [])
  return (
    <div>

      <header>
        
      
        <NavBar />
      </header>
      <main>
        <div className="image-grid">
          <img src="https://wemfvovctkoappoaqcby.supabase.co/storage/v1/object/public/productimages/hoodie.png" alt="obrazok 1" />
          <img src="https://wemfvovctkoappoaqcby.supabase.co/storage/v1/object/public/productimages/shirt2.png" alt="obrazok 2" />
          <img src="https://wemfvovctkoappoaqcby.supabase.co/storage/v1/object/public/productimages/socks2" alt="obrazok 3" />
          {/* Tu môžeš pridať ďalšie obrázky */}
        </div>
      </main>
    </div>
  );
};


export default Product;