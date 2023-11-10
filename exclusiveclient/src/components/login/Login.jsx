import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

        const user_account = useNavigate();

     const [login, setLogin] = useState({
          email: '',
          password: '',
     })


     const userLogin = (e) =>{
        setLogin({...login, [e.target.name] : e.target.value})
     }

     const loginAccount = async(event) =>{
        event.preventDefault();
        if(login.email === ""){
          alert("Please fill the email")
          return false;
        }else if(login.password === ""){
          alert("Please fill the password")
          return false;
        }else{
          const {email, password} = login
          try {
             const user = await fetch('/api/login',{
                 method: 'POST',
                 mode: 'cors',

                 headers:{
                      'Content-Type' : 'application/json'
                 },
                 body:JSON.stringify({email, password})
             })

              const data = await user.json();

             if(user.status === 201){
                  localStorage.setItem("user_token_data", data.token_result);
                 setLogin({email, password})
                 alert("Login Successfull")
                 user_account('/account')
             }else{
               alert("Email or password error")
             }
          } catch (error) {
             console.log(error)
          }
        }
     }

  return (
   <>
      <Header />
        <main>
      <section>
              <div className='login_container '>
                    <div className='login_cols flex mt-20 pl-[0]  pt-[4.5vw] pb-[11vw] items-center'>
                           <div className='login_first_cols bg-[#CBE4E8;] py-1 desktoplarge:w-[50%] mobile:hidden desktop:w-[50%] laptop:w-[50%]'>
                                <img  src='/src/assets/images/shoppingbasket.webp' alt='shopping_signup' className='w-[100%] h-[100%]'/>
                           </div>

                           <div className='login_second_cols desktoplarge:w-[30%] pl-[9vw] desktop:w-[40%] laptop:w-[45%] mobile:grid mobile:w-[80%] mobile:mx-auto mobile:pl-[unset] tablet:pl-[4vw]'>
                              <div className='login_create_account'>
                                   <p className='font-secondary text-4xl font-medium leading-12 laptop:text-2xl tablet:text-xl tablet:leading-6'>Login into exclusive</p>
                                   <p className='font-secondary text-base leading-5 font-normal pt-6'>Enter your details below</p>
                              </div>

                              <div className='login_form mt-12 tablet:pr-8 tablet:mt-8'>
                                   <form>
                                         <div className='input_signup grid gap-y-12 tablet:gap-y-8'>
                                            <input type='text' placeholder='Email' className='outline-none border-b-2 py-2' onChange={userLogin} value={login.email} name='email'/>
                                            <input type='password' placeholder='Password' className='outline-none border-b-2 py-2'  onChange={userLogin} value={login.password} name='password' />
                                         </div>

                                         <div className='login_signup mt-10 bg-[#DB4444] py-4 px-24 text-center tablet:px-16'>
                                           <Link to='/signup'><button className='text-white font-secondary text-base font-medium leading-6'>Creat Account</button></Link>
                                         </div>

                                         <div className='login_google mt-3 py-4 px-15 text-center flex items-center justify-between gap-2'>
                                               <div className='login_button bg-[#DB4444] px-12 py-4 rounded-md tablet:px-5'>
                                                    <button className='text-white leading-6 text-base font-secondary' onClick={loginAccount}>Log in</button>
                                               </div>
                                               <div className='forget_password'>
                                                     <button className='leading-6 text-base font-secondary text-[#DB4444]'>Forget password</button>
                                               </div>
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

export default Login