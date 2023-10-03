import React, { useState } from 'react';
import ContextApi from './Context';



const AppProvider = ({children}) => {

   const [products, setProducts] = useState([]);

   return(
         <ContextApi.Provider value={{products, setProducts}}>
             {children}
         </ContextApi.Provider>
   )
}

export default AppProvider