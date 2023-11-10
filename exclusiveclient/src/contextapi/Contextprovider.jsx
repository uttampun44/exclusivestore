import React, { useState, useEffect, useReducer } from 'react';
import ContextApi from './Context';
import { Cartreducer } from './Cartreducer';
import { useGoogleLogin } from '@react-oauth/google';


const AppProvider = ({children}) => {

   const initialState = {
      cart: [],
      price: 0,
      quantity: 0,
      subtotal: 0,
    };

   const [products, setProducts] = useState([]);

   // google auth
   const [profile, setProfile] = useState([]);
   const [user, setUser] = useState([]);

  //  search products
  const [searchValue, setSearchValue] = useState('');
  const [showproduct, setShowProduct] = useState(false);

   const login = useGoogleLogin({
     onSuccess: (codeResponse) => {
       setUser(codeResponse);
       profileShow(codeResponse.access_token);
     },
     onError: (error) => console.log('Login Failed:', error),
   });

   const profileShow = async (access_token) => {
     try {
       if (access_token) {
         const userProfile = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`, {
           headers: {
             Authorization: `Bearer ${access_token}`,
             Accept: 'application/json',
           },
         });

         const userData = await userProfile.json();

         if (userProfile.status == 200) {
           setProfile(userData);
         }
       }
     } catch (error) {
       console.error('Error:', error);
     }
   };

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
         if (response.status == 200) {
          setProducts(data.products);
        }

    } catch (error) {
       throw new Error
      }
    }

useEffect(() =>{
  fethProduct()
}, [])

// google authentication
useEffect(() =>{
   profileShow()
}, [user])


   return(
         <ContextApi.Provider value={{products, setProducts, state, dispatch, profile, setProfile,
         user, setUser, login, searchValue, setSearchValue, showproduct, setShowProduct}}>
             {children}
         </ContextApi.Provider>
   )
}

export default AppProvider