import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'


function Signup() {
  return (
  <>
     <Header />
     <main>
          <section>
              <div className='signup_container '>
                    <div className='signup_cols flex mt-20 pl-[0]  pt-[4.5vw] pb-[11vw] items-center'>
                           <div className='signup_first_cols bg-[#CBE4E8;] py-1 desktoplarge:w-[50%] mobile:hidden desktop:w-[50%] laptop:w-[50%]'>
                                <img  src='/src/assets/images/shoppingbasket.webp' alt='shopping_signup' className='w-[100%] h-[100%]'/>
                           </div>

                           <div className='signup_second_cols desktoplarge:w-[30%] pl-[9vw] tablet:pl-[3vw] desktop:w-[40%] laptop:w-[45%] mobile:grid mobile:w-[80%] mobile:mx-auto mobile:pl-[unset] tablet:mt-24'>
                              <div className='signup_create_account'>
                                   <p className='font-secondary text-4xl font-medium leading-10 laptop:text-2xl tablet:text-xl tablet:leading-6'>Create an account</p>
                                   <p className='font-secondary text-base leading-5 font-normal pt-6'>Enter your details below</p>
                              </div>

                              <div className='signup_form mt-12 tablet:pr-8 tablet:mt-8'>
                                   <form method='post'>
                                         <div className='input_signup grid gap-y-12 tablet:gap-y-8 mobile:gap-y-4'>
                                            <input type='text' placeholder='Name' className='outline-none border-b-2 py-2'/>
                                            <input type='text' placeholder='Email or Phone Number' className='outline-none border-b-2 py-2'/>
                                            <input type='password' placeholder='password' className='outline-none border-b-2 py-2'/>
                                         </div>

                                         <div className='submit_signup mt-10 bg-[#DB4444] py-4 px-24 text-center tablet:px-16'>
                                              <button className='text-white font-secondary text-base font-medium leading-6'>Creat Account</button>
                                         </div>

                                         <div className='signup_google mt-3 border-2 py-4 px-15 text-center flex items-center justify-center gap-2'>
                                            <img src='/src/assets/images/Icon-Google.png' alt='googlepng'/> <button className='font-secondary text-base font-medium leading-6'>Sign up with Google </button>
                                         </div>

                                         <div className='signup_already_account flex justify-center mt-8 gap-4 items-center h-8 tablet:h-14'>
                                              <p className='font-secondary text-base font-normal leading-6'>Already have account ?</p> <Link to='/login' className='font-secondary text-base font-normal leading-6 hover:border-b  cursor-pointer'>Log In</Link>
                                         </div>
                                   </form>
                              </div>

                           </div>
                    </div>
              </div>
          </section>
     </main>
     <Footer />
  </>
  )
}

export default Signup