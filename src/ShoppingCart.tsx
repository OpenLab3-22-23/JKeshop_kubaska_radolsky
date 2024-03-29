import React, { useState, useEffect } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
}

const ShoppingCart = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {

    const savedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    setProducts(savedProducts);


    const totalPrice = savedProducts.reduce((acc, curr) => acc + curr.price, 0);
    setTotalPrice(totalPrice);
  }, []);

  useEffect(() => {

    localStorage.setItem('products', JSON.stringify(products));


    const totalPrice = products.reduce((acc, curr) => acc + curr.price, 0);
    setTotalPrice(totalPrice);
  }, [products]);

  const addToCart = (product: Product) => {
    setProducts([...products, product]);
  };

  /*const removeFromCart = (productId: number) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };*/

  return (
    <div>
      <div className='Cart'>
      <h2>Shopping Cart</h2>
      </div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
         <button onClick={() => localStorage.setItem('products', JSON.stringify(products)) }>add</button>
        </div>
      ))}
      <h3>Total Price: ${totalPrice}</h3>
      
    </div>
  );
};

export default ShoppingCart;
 /*<button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>*/