import React, { useContext } from 'react'
import ContextApi from '../../contextapi/Context'

function Productgallery({image, productName, price}) {

   const {addToCart} = useContext(ContextApi)


  const carts = () =>{
      console.log(productName)
      addToCart(productName)
   }
  return (
   <div>

         <div className='product_grid_gallery'>
            <div className='products_gallery grid mobile:gap-y-4 mobile:w-[100%] gap-y-4 my-5 text-center' >
               <img src={image} alt='product_image' className='w-[100%] h-[140px] object-contain mobile:w-[60px] mobile:h-[60px]'/>

            <div className='product_price'>
              <p className='product_name font-secondary text-base leading-5 font-semibold mobile:text-[10px] mobile:leading-3'>{productName}</p>
              <p className='font-secondary text-[#DB4444]'>$ {price}</p>
           </div>

       <div className='add_to_cart'>
          <button className='bg-black w-[100%] text-primary py-2 font-secondary leading-6 font-medium text-base rounded mobile:text-[10px] mobile:leading-4 mini:text-[8px] mini:font-bold' onClick={carts}>Add To Cart</button>
      </div>

             </div>
         </div>

   </div>
  )
}

export default Productgallery