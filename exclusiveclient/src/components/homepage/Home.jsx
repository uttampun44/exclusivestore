import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Carousel } from 'react-carousel-minimal';
import ContextApi from '../../context api/Context';
import { useContext } from 'react';

function Home() {

    const {products, setProducts} = useContext(ContextApi);

   const carousel = [
     {
      image: '/src/assets/images/fashion.webp',
      objectFit: 'fill'
     },
     {
      image: '/src/assets/images/ps5.webp',
      objectFit: 'fill'
     },
     {
      image: '/src/assets/images/electornic.webp',
      objectFit: 'fill'
     }
   ]
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

             console.log(data.products)
             if (response.status === 200) {
              setProducts(data.products);
            }

        } catch (error) {
           throw new Error
        }
    }
    useEffect(() =>{
      fethProduct()
    }, [])

  return (
    <section className='hero_section'>
     <div className='hero_container max-w-bodyWidth mx-auto'>
          <div className='hero_row flex items-start'>
               <div className='sidebar_menu border-r-2 px-7 py-10 mobile:px-4 mobile:hidden'>
                  <aside>
                      <ul className='grid gap-y-4 mobile:gap-y-1'>
                         <li><Link to='/' className='font-secondary text-base font-normal leading-6 tablet:text-sm'>Woman's Fashion</Link></li>
                         <li><Link to='/' className='font-secondary text-base font-normal leading-6 tablet:text-sm'>Men's Fashion</Link></li>
                         <li><Link to='/' className='font-secondary text-base font-normal leading-6 tablet:text-sm'>Electronics</Link></li>
                         <li><Link to='/' className='font-secondary text-base font-normal leading-6 tablet:text-sm'>Home & Lifestyles</Link></li>
                         <li><Link to='/' className='font-secondary text-base font-normal leading-6 tablet:text-sm'>Medicine</Link></li>
                         <li><Link to='/' className='font-secondary text-base font-normal leading-6 tablet:text-sm'>Sports & Outdoor</Link></li>
                         <li><Link to='/' className='font-secondary text-base font-normal leading-6 tablet:text-sm'>Baby's and Toy's</Link></li>
                         <li><Link to='/' className='font-secondary text-base font-normal leading-6 tablet:text-sm'>Groceries & Pets</Link></li>
                         <li><Link to='/' className='font-secondary text-base font-normal leading-6 tablet:text-sm'>Health & Beauty</Link></li>
                      </ul>
                  </aside>
               </div>

               <div className='hero_carousel py-10 w-[80%] pl-10 tablet:pr-8 mobile:pr-4 mobile:w-[100%] mobile:pl-4'>
                   <div className='hero_carousel_box'>
                      <Carousel  data={carousel} width= '100%' dots={true} objectFit ='fill' />
                   </div>
               </div>
          </div>
    </div>

    <section className='today_deal'>
                 <div className='deal_container max-w-bodyWidth mx-auto mt-[6em] pl-8'>
                       <div className='deal_title flex items-center gap-4'>
                           <div className='deal_box bg-[#DB4444] w-[2%] h-[70px] rounded'>

                           </div>
                           <div className='deal_row_title'>
                               <p className='text-[#DB4444] font-secondary text-lg font-semibold leading-5'>Today's Deal</p>
                           </div>
                       </div>

                       {/* flash sales */}
                       <div className='flash_sales_cantainer mt-6 mb-10'>
                           <div className='flash_sales_row flex gap-[4rem] mobile:gap-9'>

                           <div className='flash_sales_title self-end'>
                               <h1 className='text-secondary font-primary text-2xl font-semibold leading-10 mobile:text-lg'>Flash Sales</h1>
                           </div>
                           <div className='days_limit_offer flex gap-4'>
                               <div className='offer_days'>
                                   <p className='text-secondary font-secondary text-xs leading-5 font-medium '>Days</p>
                                   <p className='text-secondary font-primary text-3xl font-bold leading-8 mobile:flex mobile:text-lg'>03 <span>:</span></p>
                               </div>
                               <div className='offer_hours'>
                                 <p className='text-secondary font-secondary text-xs leading-5 font-medium'>Hours</p>
                                 <p className='text-secondary font-primary text-3xl font-bold leading-8 mobile:flex mobile:text-lg'>04  <span>:</span></p>
                               </div>
                               <div className='offer_minutes'>
                                  <p className='text-secondary font-secondary text-xs leading-5 font-medium'>Minutes</p>
                                  <p className='text-secondary font-primary text-3xl font-bold leading-8 mobile:flex mobile:text-lg'>30 <span>:</span></p>
                               </div>
                               <div className='offer_seconds'>
                                   <p className='text-secondary font-secondary text-xs leading-5 font-medium'>Seconds</p>
                                   <p className='text-secondary font-primary text-3xl font-bold leading-8 mobile:text-lg'>03</p>
                               </div>
                           </div>
                           </div>
                       </div>

                       {/* product carousel */}
                       <div className='product_gallery flex justify-between items-center mb-14 tablet:flex-wrap mobile:flex-wrap mobile:row-y-4'>
                             {
                                products.slice(0, 5).map((product) =>{
                                  return(
                                    <div className='products grid mobile:gap-y-4 mobile:w-[100%] pr-4 gap-y-4' key={product.id} >
                                      <img src={product.image} alt='product_image' className='w-[146px] h-[140px] object-contain'/>
                                       <div className='product_price'>
                                       <p className='product_name font-secondary text-base leading-5 font-semibold'>{product.productName}</p>
                                         <p className='font-secondary text-[#DB4444]'>$ {product.price}</p>
                                       </div>

                                       <div className='add_to_cart'>
                                           <button className='bg-black w-[100%] text-primary py-2 font-secondary leading-6 font-medium text-base rounded'>Add To Cart</button>
                                       </div>
                                    </div>
                                  )
                                })
                             }
                       </div>
                       <div className='view_products flex justify-center my-16'>
                                  <Link to='/products' className='bg-[#DB4444] py-4 text-base font-secondary leading-6 px-12 font-medium text-white'>View All Products</Link>
                       </div>
                 </div>
            </section>
      </section>
  )
}

export default Home