import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { useNavigate } from 'react-router-dom';


function Useraccount() {

   const [user, setUser]  = useState(null);

   const  redirect = useNavigate()

   const user_token = localStorage.getItem("user_token_data");

   const userAccount = async() =>{

     try {
      const user_details = await fetch("/api/useraccount", {
         method: 'GET',
         mode: 'cors',
         headers: {
            'Content-Type' : 'application/json',
            "Authorization": user_token
         }
       })


       const get_user_data = await user_details.json();


       if(!user_token){
         redirect("*");
       }else{
         setUser(get_user_data)
         redirect('/account')
       }
     } catch (error) {
       throw new Error
     }
   }

   const logout = () =>{
    localStorage.clear();
      redirect('/login');
   }

   useEffect(() =>{
      userAccount()
   }, [])

  return (
    <>
       <Header />
          <main>
              <section className='user_account_section'>
                  <div className='max-w-bodyWidth mx-auto my-16'>
                       <div className='user_account_profile grid justify-items-center py-10 gap-4'>
                          <img src='/src/assets/images/userprofile.png' alt='user_profile' width={200} height={200} style={{objectFit: 'cover'}}/>
                          <p className='font-semibold text-black leading-8 text-2xl font-secondary'>User Details</p>
                       </div>

                       <div className='user_info grid justify-center'>
                           <p className='font-semibold text-black leading-8 text-2xl font-secondary'>Email: <span className='font-normal'>{user && user.UserDetails.email}</span> </p>
                           <p className='font-semibold text-black leading-8 text-2xl font-secondary'>Full Name: <span className='font-normal'>{user && user.UserDetails.fullname}</span> </p>
                           <button onClick={logout} className='bg-[#DB4444] px-4 py-4 mt-5 text-white font-secondary text-base font-medium leading-6 rounded-sm'>Logout</button>
                       </div>
                  </div>
              </section>
          </main>
       <Footer />
    </>
  )
}

export default Useraccount