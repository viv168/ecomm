import axios from './Axios';
import React, { useState, createContext, useEffect } from 'react';

// Create a context for the product
export const productContext = createContext();

const Context = ({ children }) => {
  // Destructure the children prop from props
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    try {
      const { data } = await axios('/products');
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <productContext.Provider value={[products, setProducts]}>
      {children}
    </productContext.Provider>
  );
};

export default Context;
