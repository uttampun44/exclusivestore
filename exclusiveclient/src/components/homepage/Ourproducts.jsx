import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ContextApi from '../../contextapi/Context';

function Ourproducts({image, productName, price}) {

    const history = useNavigate();

    const {dispatch} = useContext(ContextApi)

  const cart = () => {

   const product = { productName, image, price };

   dispatch({type:'ADD_TO_CART', payload:product})

     history('/cart')
  }

  return (
    <div>
      <div className='products grid mobile:gap-y-4 mobile:w-[100%] pr-4 gap-y-4 my-5 text-center' >
         <img src={image} alt='product_image' className='w-[100%] h-[140px] object-contain mobile:w-[60px] mobile:h-[60px]'/>
      <div className='product_price'>

      <p className='product_name font-secondary text-base leading-5 font-semibold mobile:text-[10px] mobile:leading-3'>{productName}</p>
         <p className='font-secondary text-[#DB4444]'>$ {price}</p>
      </div>

     <div className='add_to_cart'>
         <button className='bg-black w-[100%] text-primary py-2 font-secondary leading-6 font-medium text-base rounded mobile:text-[10px] mobile:leading-4 mini:text-[8px] mini:font-bold' onClick={cart} >Add To Cart</button>
     </div>

        </div>
    </div>
  )
}

export default Ourproducts