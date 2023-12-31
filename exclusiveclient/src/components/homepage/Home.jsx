import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Carousel } from 'react-carousel-minimal';
import ContextApi from '../../contextapi/Context';
import { useContext } from 'react';
import Sales from './Sales';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ComputerIcon from '@mui/icons-material/Computer';
import WatchIcon from '@mui/icons-material/Watch';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Ourproducts from './Ourproducts';

function Home() {

    const {products} = useContext(ContextApi);

   const [date, setDate] = useState({
     days: 0,
     hours: 0,
     minutes: 0,
     seconds: 0 });

   const dateSales = () => {

    let saleDay = new Date("2023/12/10");

    let currentDate = new Date();

    let daysRemaining = saleDay - currentDate;

       if(daysRemaining > 0){

        let days = Math.floor(daysRemaining / (1000 * 60 * 60 * 24))
        let hours = Math.floor((daysRemaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
        let minutes = Math.floor((daysRemaining % (1000 * 60 * 60) / (1000 * 60)))
        let seconds = Math.floor((daysRemaining % (1000 * 60 ) / 1000))

        const remaingDays  = {days, hours, minutes, seconds};
        setDate(remaingDays);
       }else{

        setDate({ days: 0, hours: 0, minutes: 0, seconds: 0 });
       }
   }

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

   useEffect(() =>{
     dateSales()
    const offer = setInterval(() =>{
        dateSales()
    }, 1000)

    return () =>{
        clearInterval(offer)
    }
   }, [])


  return (
    <main>
           <section className='hero_section'>
     <div className='hero_container max-w-bodyWidth mx-auto'>
          <div className='hero_row flex items-start'>
               <div className='sidebar_menu border-r-2 pr-7  py-10 mobile:px-4 mobile:hidden'>
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

               <div className='hero_carousel py-10 w-[90%] pl-10 tablet:pr-8 mobile:pr-4 mobile:w-[100%] mobile:pl-4'>
                   <div className='hero_carousel_box'>
                      <Carousel  data={carousel} width= '100%' dots={true} objectFit ='fill' />
                   </div>
               </div>
          </div>
    </div>

    <section className='today_deal'>
                 <div className='deal_container max-w-bodyWidth mx-auto mt-[6em] mobile:pl-4 mobile:mt-0 border-b-2'>
                       <div className='deal_title flex items-center gap-4'>
                           <div className='deal_box bg-[#DB4444] w-[2%] h-[70px] rounded'>

                           </div>
                           <div className='deal_row_title'>
                               <p className='text-[#DB4444] font-secondary text-lg font-semibold leading-7'>Today's Deal</p>
                           </div>
                       </div>

                       {/* flash sales */}
                       <div className='flash_sales_cantainer mt-6 mb-10'>
                           <div className='flash_sales_row flex gap-[4rem] mobile:gap-5 mobile:px-2'>

                           <div className='flash_sales_title self-end'>
                               <h1 className='text-secondary font-primary text-2xl font-semibold leading-10 mobile:text-base'>Flash Sales</h1>
                           </div>
                           <div className='days_limit_offer flex gap-4 text-center w-[35%] mobile:w-[100%]'>
                               <div className='offer_days bg-[#DB4444] p-1 rounded-md w-[100%]'>
                                   <p className='text-secondary font-secondary text-xs leading-5 font-medium text-white'>Days</p>
                                   <p className='text-secondary font-primary text-2xl font-bold leading-8  mobile:text-sm mobile:leading-4 text-white'>{date.days}</p>
                               </div>
                               <div className='offer_hours bg-[#DB4444] p-1 rounded-md w-[100%]'>
                                 <p className='text-secondary font-secondary text-xs leading-5 font-medium text-white'>Hours</p>
                                 <p className='text-secondary font-primary text-2xl font-bold leading-8  mobile:text-sm mobile:leading-4 text-white'>{date.hours}</p>
                               </div>
                               <div className='offer_minutes bg-[#DB4444]  rounded-md w-[100%] p-1'>
                                  <p className='text-secondary font-secondary text-xs leading-5 font-medium text-white'>Minutes</p>
                                  <p className='text-secondary font-primary text-2xl font-bold leading-8  mobile:text-sm mobile:leading-4 text-white'>{date.minutes}</p>
                               </div>
                               <div className='offer_seconds bg-[#DB4444] p-1 rounded-md w-[100%]'>
                                   <p className='text-secondary font-secondary text-xs leading-5 font-medium text-white'>Seconds</p>
                                   <p className='text-secondary font-primary text-2xl font-bold leading-8 mobile:text-sm mobile:leading-4 text-white'>{date.seconds}</p>
                               </div>
                           </div>
                           </div>
                       </div>

                       {/* product carousel */}
                       <figure>
                       <div className='product_gallery flex justify-between items-end mb-14 mobile:row-y-4'>
                             {
                            products.slice(0, 5).map((product) =>{
                                  return(
                                    <Sales key={product.id} {...product}/>
                                )
                             })
                           }
                         </div>
                       </figure>

                       <div className='view_products flex justify-center my-16'>
                                  <Link to='/products' className='bg-[#DB4444] py-4 text-base font-secondary leading-6 px-12 font-medium text-white mobile:px-4 mobile:text-xs'>View All Products</Link>
                       </div>
                 </div>
            </section>

            {/* browse by category */}

                <section className='browse_by_category'>
                        <div className='browse_by_category_container max-w-bodyWidth mt-20 mx-auto mobile:px-4 tablet:px-4 laptop:px-4'>
                             <div className='browse_ctegory flex items-center gap-4'>
                                 <div className='bg-[#DB4444] w-[2%] h-[70px] rounded'>

                                 </div>
                                 <div className='browse_categories_box'>
                                      <p className='text-secondary text-base leading-5 font-semibold text-[#DB4444]'>Category</p>
                                 </div>
                             </div>

                             <div className='browse_title mt-10'>
                                    <h2 className='text-secondary font-primary text-2xl font-semibold leading-10 mobile:text-base'>Browse By Category</h2>
                             </div>

                             <div className='browse_category_icon mt-14 flex justify-between items-center mb-12 mobile:justify-normal mobile:gap-2 mini:justify-center'>
                                  <div className='browse_phones py-7 px-10 rounded border-2 text-center tablet:px-5 tablet:py-5 mobile:px-4 mobile:py-4 mini:px-2 mini:py-2 hover:bg-[#DB4444] hover:text-white mini:w-[20%] cursor-pointer'>
                                     <SmartphoneIcon className='mobile:!text-sm'/>
                                     <p className='font-normal leading-5 text-base font-secondary mt-3 mobile:text-xs mini:text-[8px]'>Phones</p>
                                  </div>
                                  <div className='browse_computers py-7 px-10 rounded border-2 text-center tablet:px-5 tablet:py-5 mobile:px-4 mobile:py-4 mini:px-2 mini:py-2 hover:bg-[#DB4444] hover:text-white mini:w-[20%] cursor-pointer'>
                                      <ComputerIcon className='mobile:!text-sm'/>
                                      <p className='font-normal leading-5 text-base font-secondary mt-3 mobile:text-xs mini:text-[8px]'>Computers</p>
                                  </div>

                                  <div className='browse_smart_watch py-7 px-10 rounded border-2 text-center tablet:px-5 tablet:py-5 mobile:px-4 mobile:py-2 mini:px-2 mini:py-2 hover:bg-[#DB4444] hover:text-white mini:pt-0 mini:pb-[2px] mini:w-[20%] cursor-pointer'>
                                     <WatchIcon className='mobile:!text-sm'/>
                                     <p className='font-normal leading-5 text-base font-secondary mt-3 mobile:text-xs mini:text-[8px]'>Smart Watch</p>
                                  </div>

                                  <div className='browse_camera py-7 px-10 rounded border-2 text-center tablet:px-5 tablet:py-5 mobile:px-4 mobile:py-4 mini:px-2 mini:py-2 hover:bg-[#DB4444] hover:text-white mini:w-[20%] cursor-pointer'>
                                      <CameraAltIcon className='mobile:!text-sm'/>
                                      <p className='font-normal leading-5 text-base font-secondary mt-3 mobile:text-xs mini:text-[8px]'>Camera</p>
                                  </div>

                                  <div className='browse_gaming py-7 px-10 rounded border-2 text-center tablet:px-5 tablet:py-5 mobile:px-4 mobile:py-4 mini:px-2 mini:py-2 hover:bg-[#DB4444] hover:text-white mini:w-[20%] cursor-pointer'>
                                      <SportsEsportsIcon className='mobile:!text-sm'/>
                                      <p className='font-normal leading-5 text-base font-secondary mt-3 mobile:text-xs mini:text-[8px]'>Gaming</p>
                                  </div>
                             </div>
                        </div>
                </section>

                {/* music experience */}

                <section className='music experience'>
                       <div className='mx-auto max-w-bodyWidth mb-16 tablet:px-4 mobile:px-4 laptop:px-4'>
                           <div className='bg-black'>
                               <div className='jbl_speaker_container flex justify-center items-center mobile:flex-wrap'>
                                  <div className='enhance_music w-[50%] pt-28 pl-14 mobile:w-[unset] mobile:pl-[unset]'>
                                    <p className='text-white font-primary text-[48px] leading-[60px] tablet:text-4xl tablet: mobile:text-xl mobile:leading-6 tablet:leading-10'>Enhance Your Music Experience</p>

                                    <div className='days_limit_offer flex gap-4 mt-10'>
                               <div className='music_days bg-white px-3 py-2 rounded-[50%] mobile:rounded-[unset] tablet:w-[20%] w-[13%] text-center mobile:w-[unset]'>
                                   <p className='text-secondary font-secondary text-xs leading-5 font-medium '>Days</p>
                                   <p className='text-secondary font-primary text-2xl font-bold leading-8  mobile:text-xs mobile:leading-4'>{date.days}</p>
                               </div>
                               <div className='music_hours bg-white px-3 py-2 rounded-[50%] mobile:rounded-[unset] tablet:w-[20%] w-[13%] text-center mobile:w-[unset]'>
                                 <p className='text-secondary font-secondary text-xs leading-5 font-medium'>Hours</p>
                                 <p className='text-secondary font-primary text-2xl font-bold leading-8  mobile:text-xs mobile:leading-4'>{date.hours}</p>
                               </div>
                               <div className='music_minutes bg-white px-3 py-2 rounded-[50%] mobile:rounded-[unset] tablet:w-[20%] w-[13%] text-center mobile:w-[unset]'>
                                  <p className='text-secondary font-secondary text-xs leading-5 font-medium'>Minutes</p>
                                  <p className='text-secondary font-primary text-2xl font-bold leading-8  mobile:text-xs mobile:leading-4'>{date.minutes}</p>
                               </div>
                               <div className='music_seconds bg-white px-2 py-2 rounded-[50%] mobile:rounded-[unset] tablet:w-[20%] w-[13%] text-center mobile:w-[unset]'>
                                   <p className='text-secondary font-secondary text-xs leading-5 font-medium'>Seconds</p>
                                   <p className='text-secondary font-primary text-2xl font-bold leading-8 mobile:text-xs mobile:leading-4'>{date.seconds}</p>
                               </div>
                           </div>

                           <div className='shop_now w-[30%] mt-10 mb-14 mobile:w-[30%]'>
                            <button className='bg-[#0F6] w-[100%] text-black py-2 font-secondary leading-6 font-medium text-base rounded mobile:text-[10px] mobile:leading-4 mini:text-[8px] mini:font-bold'>Add To Cart</button>
                           </div>
                                </div>

                                <div className='jbl_image w-[50%] mobile:w-[100%]'>
                                   <img src='/src/assets/images/jbl.webp' className='tablet:w-[300px] tablet:h-[auto] tablet:object-contain'/>
                                </div>

                               </div>
                           </div>
                       </div>
                </section>

                {/* explore our products */}

                <section className='explore_our_products mt-8'>
                      <div className='explore_products_container max-w-bodyWidth mx-auto laptop:px-4 tablet:px-4 mobile:px-4'>
                             <div className='explore_ctegory flex items-center gap-4'>
                                 <div className='bg-[#DB4444] w-[2%] h-[70px] rounded'>

                                 </div>
                                 <div className='explore_categories_box'>
                                      <p className='text-secondary text-base leading-5 font-semibold text-[#DB4444]'>Category</p>
                                 </div>
                             </div>

                             <div className='explore_title mt-10'>
                                    <h4 className='text-secondary font-primary text-2xl font-semibold leading-10 mobile:text-base'>Explore Our Products</h4>
                             </div>

                             <div className='explore_our_products products_display grid grid-cols-4 gap-x-3 gap-y-6 items-end mb-14 mobile:row-y-4'>
                                  {
                                    products.slice(4, 16).map((ourproducts) =>{
                                       return(
                                        <Ourproducts key={ourproducts.id} {...ourproducts}/>
                                       )
                                    })
                                  }
                             </div>
                             <div className='view_products flex justify-center my-16'>
                                  <Link to='/products' className='bg-[#DB4444] py-4 text-base font-secondary leading-6 px-12 font-medium text-white mobile:px-4 mobile:text-xs'>View All Products</Link>
                       </div>
                      </div>
                </section>

                <section className='customer_service'>
                      <div className='customer_service_container max-w-bodyWidth my-16 mx-auto mobile:my-9'>
                            <div className='customer_row'>
                                    <div className='services_container max-w-[973px] mx-auto'>
                                        <div className='service_gallery flex justify-between items-center mobile:gap-4 mobile:px-4 tablet:px-4'>
                                             <img src='/src/assets/images/Services.png' className='w-auto h-auto mobile:!w-[150px] mobile:!h-[auto] mobile:!object-cover' alt='services'/>
                                             <img src='/src/assets/images/customerservice.png' className='w-auto h-auto mobile:!w-[150px] mobile:!h-[auto] mobile:!object-cover' alt='customerservice'/>
                                             <img src='/src/assets/images/moneyback.png' className='w-auto h-auto mobile:!w-[150px] mobile:!h-[auto] mobile:!object-cover' alt='moneyback'/>
                                        </div>
                                    </div>
                            </div>
                      </div>
                </section>
      </section>
    </main>
  )
}

export default Home