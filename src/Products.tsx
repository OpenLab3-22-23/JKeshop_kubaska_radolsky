import NavBar from "./NavBar";
import React, { useEffect, useState } from "react";
import LandingPage from "./LandingPage";
import { supabase } from "./supabase/supabaseClient";


/*const Product = () => {
  const [products, setProducts] = useState([])
  const [price, setPrice] = useState(0)
  const [img_Url, setImg_Url] = useState("")
  const [descriptionP, setDescriptionP] = useState("")
    
    useEffect(() => {
        const fetchProduct = async () => {
          const { data, error } = await supabase.from("products").select().eq("id", "1");
          if (error) {
            console.log(error)
          }
          if (data) {
            setPrice(data[0].price)
            setImg_Url(data[0].img_url)
            setDescriptionP(data[0].description)
            setProducts(data)
          }
        }
        fetchProduct()
      }, [])
      
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
       <div className='big-flexbox'>
          {products && (
              <div className='small-flexbox'>
                {products.map(product => (
                  <h3>{product.price}</h3>
                ))}
              </div>
          )}
          
        </div>
          {/*<div className="image-grid">
          <img src="https://wemfvovctkoappoaqcby.supabase.co/storage/v1/object/public/productimages/hoodie.png" alt="obrazok 1" />
          <img src="https://wemfvovctkoappoaqcby.supabase.co/storage/v1/object/public/productimages/shirt2.png" alt="obrazok 2" />
          <img src="https://wemfvovctkoappoaqcby.supabase.co/storage/v1/object/public/productimages/socks2" alt="obrazok 3" />
           Tu môžeš pridať ďalšie obrázky 
        </div>
      </main>
    </div>
  );
};


export default Product;*/
type Product = {
  id: number
  description: string
  price: number
  img_url: string
}


const Products = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('id, description, price, img_url')
        .range(0, 4)

      if (error) {
        console.error(error)
        return
      }

      if (data) {
        setProducts(data)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div>
        <header>
      
        <NavBar />
        
      </header>
      <main>
    <div>
      {products.map((product) => (
        <div key={product.id} className="product-box">
          <img src={product.img_url} alt={product.description} />
          <h2>{product.description}</h2>
          <p>Price: {product.price}</p>
        </div>
      ))}
      </div>
      </main>
    </div>
  )
}

export default Products;