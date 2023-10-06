import React from 'react'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Footer() {
  return (
   <footer>
       <section className='footer_section bg-black mt-4'>
          <div className='footer_container max-w-bodyWidth mx-auto pt-20 pb-14 flex justify-between items-star laptop:px-4 tablet:px-4 mobile:px-8 mobile:grid mobile:grid-cols-2 gap-y-8 tablet:gap-4 mobile:gap-6'>
              <div className='footer_title grid gap-y-3'>
                 <h5 className='text-white font-bold text-2xl font-primary leading-7'>Exclusive</h5>

                   <div className='subsribe_cols grid gap-y-4'>
                      <p className='text-white footer_subscribe font-secondary text-xl  font-medium tablet:text-sm mobile:text-sm'>Subscribe</p>
                      <p className='text-white footer_discount font-secondary text-base font-normal leading-6'>Get 10% off your first order</p>
                   </div>

                 <div className='footer_input relative'>
                 <input type='text' placeholder='Enter Your Email'  className='text-center bg-black text-white border rounded-sm py-3 outline-none mobile:w-[100%] text-xs tablet:w-[90%]'/><ArrowForwardIcon style={{color: 'white', position: 'absolute', right: '10%', top: '15%', cursor: 'pointer'}} className='mobile:!right-[0%] mobile:!top-[10%]'/>
              </div>
              </div>

              <div className='footer_support grid gap-y-3'>
                <p className='support_title text-white  font-secondary text-xl  font-semibold tablet:text-sm mobile:text-sm'>Support</p>
                <div className='support_address mobile:pt-4'>
                   <p className='text-[#FAFAFA] support_address_text font-secondary text-xl font-medium tablet:text-base'>111 Bijoy sarani, Dhaka,<br></br> DH 1515, Bangladesh.</p>
                </div>

                <div className='footer_email'>
                    <p className='text-[#FAFAFA] font-secondary text-base font-normal leading-6 tablet:text-base'>exclusive@gmail.com</p>
                </div>

                <div className='footer_phone'>
                     <p className='text-[#FAFAFA] font-secondary text-base font-normal leading-6 tablet:text-base'>+88015-88888-9999</p>
                </div>

              </div>

                 <div className='footer_account grid gap-y-3'>
                  <p className='account_title text-white  font-secondary text-xl  font-semibold tablet:text-sm mobile:text-sm'>Account</p>

                  <div className='account_cols grid gap-y-3 pt-3 tablet:!pt-0'>
                       <Link to='/' className='text-[#FAFAFA] font-secondary text-base font-normal leading-6'>My Account</Link>
                       <Link to='/' className='text-[#FAFAFA] font-secondary text-base font-normal leading-6'>Login/Register</Link>
                       <Link to='/' className='text-[#FAFAFA] font-secondary text-base font-normal leading-6'>Cart</Link>
                       <Link to='/' className='text-[#FAFAFA] font-secondary text-base font-normal leading-6'>Whistlist</Link>
                       <Link to='/' className='text-[#FAFAFA] font-secondary text-base font-normal leading-6'>Shop</Link>
                  </div>

                 </div>

                 <div className= 'footer_quick_link'>
                     <p className='quick_link text-white  font-secondary text-xl  font-semibold pb-2 tablet:text-sm mobile:text-sm'>Privay Policy</p>
                     <div className='privay_policy_cols grid gap-y-4 pt-4'>
                       <Link to='/' className='text-[#FAFAFA] font-secondary text-base font-normal leading-6'>Privacy Policy</Link>
                       <Link to='/' className='text-[#FAFAFA] font-secondary text-base font-normal leading-6'>Terms Of Use</Link>
                       <Link to='/' className='text-[#FAFAFA] font-secondary text-base font-normal leading-6'>FAQ</Link>
                       <Link to='/' className='text-[#FAFAFA] font-secondary text-base font-normal leading-6'>Contact</Link>

                  </div>
                 </div>

                 <div className='footer_download_app'>
                     <p className='text-white  font-secondary text-xl  font-medium pb-2 tablet:text-sm mobile:text-sm'>Download App</p>

                     <div className='footer_save_offer mt-4'>
                        <p className='text-[#FAFAFA] font-secondary text-base font-normal leading-6'>Save $3 with App New User Only</p>
                     </div>

                     <div className='icon_qr_pay_google flex gap-x-2 mt-2'>
                          <div className='qr'>
                              <img src='/src/assets/images/QrCode.png'/>
                          </div>
                          <div className='play_store_apple_store grid'>
                                <div className='play_store'>
                                    <img src='/src/assets/images/AppStore.png'/>
                                </div>
                                <div className='apple_store'>
                                  <img src='/src/assets/images/googlepay.png'/>
                                </div>
                          </div>
                     </div>
                 </div>
           </div>
           <div className='footer_copyrights'>
               <div className='copyrights py-4 border-t text-center'>
                  <p className='text-white  font-secondary text-xl  font-medium mobile:text-xs'>Copyright Rimel 2022. All right reserved</p>
               </div>
           </div>
       </section>
   </footer>
  )
}

export default Footer