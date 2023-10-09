import React, { useState, useEffect } from 'react';
import ContextApi from './Context';



const AppProvider = ({children}) => {

   const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  const addToCart = () =>{
       setCarts([carts, ...products])
  }


   const fethProduct = async () =>{
    try {
         const response = await fetch('/api/products', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify()
         })

         const data = await response.json();
         if (response.status === 200) {
          setProducts(data.products);
        }

    } catch (error) {
       throw new Error
    }
}
useEffect(() =>{
  fethProduct()
}, [])

   return(
         <ContextApi.Provider value={{products, setProducts, carts, addToCart}}>
             {children}
         </ContextApi.Provider>
   )
}

export default AppProvider