import React from 'react'
import Productgallery from './Productgallery'
import { useContext, useState, useEffect } from 'react'
import ContextApi from '../../contextapi/Context'
import Header from '../header/Header'
import Footer from '../footer/Footer'

function Products() {

      const {products} = useContext(ContextApi);
      const [shuffledProducts, setShuffledProducts] = useState([]);

      useEffect(() => {

        const shuffled = [...products];

        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setShuffledProducts(shuffled);
      }, [products]);

  return (
   <>
    <Header />
     <main>
          <section className='product_section'>
               <div className='product_container max-w-bodyWidth mx-auto min-h-[100vh]'>
                   <div className='product_cols grid grid-cols-4 gap-y-4 my-16 py-14 gap-x-4 mobile:px-2 tablet:px-2'>
                   {
                        shuffledProducts.map((productgallery) =>{
                          return(
                            <Productgallery key={productgallery.id} {...productgallery}/>
                          )
                        })
                    }
                   </div>
               </div>
          </section>
     </main>
     <Footer />
   </>
  )
}

export default Products