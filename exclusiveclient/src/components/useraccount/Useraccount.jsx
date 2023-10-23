import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

function Useraccount() {
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