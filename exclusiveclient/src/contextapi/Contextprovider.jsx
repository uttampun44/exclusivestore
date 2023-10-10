import React, { useState, useEffect, useReducer } from 'react';
import ContextApi from './Context';
import { Cartreducer } from './Cartreducer';


const AppProvider = ({children}) => {

   const initialState = {
      cart: [],
      price: 0,
      quantity: 0,
      subtotal: 0,
    };

   const [products, setProducts] = useState([]);

  const [state, dispatch] = useReducer(Cartreducer, initialState);

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
         <ContextApi.Provider value={{products, setProducts, state, dispatch}}>
             {children}
         </ContextApi.Provider>
   )
}

export default AppProvider