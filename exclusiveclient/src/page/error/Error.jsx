import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Error() {
  return (
    <>
       <Header />
          <div className='max-w-bodyWidth mx-auto my-10'>
            <img src='/src/assets/images/404.jpg' alt='404_error' style={{width: '100%', height: '100%'}}/>
          </div>
       <Footer />
    </>
  )
}

export default Error