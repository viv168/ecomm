// import axios from './Axios';
import React, { useState, createContext, useEffect } from 'react';

// Create a context for the product
export const ProductContext = createContext();

const Context = ({ children }) => {
  // Destructure the children prop from props
  const [products, setproducts] = useState(
    JSON.parse(localStorage.getItem('products')) || null
    );

  /*const getProducts = async () => {
    try {
      const { data } = await axios('/products');
      setproducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []); */


  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {children}
    </ProductContext.Provider>
  );
};

export default Context;
