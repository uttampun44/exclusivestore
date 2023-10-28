import React, { useEffect } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'


function Useraccount() {

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
       console.log(user_details);

       const get_user_data = await user_details.json();

       console.log(get_user_data);
     } catch (error) {
       console.log(error)
     }
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
                  </div>
              </section>
          </main>
       <Footer />
    </>
  )
}

export default Useraccount