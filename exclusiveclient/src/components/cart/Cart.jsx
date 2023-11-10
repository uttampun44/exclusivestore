import React, { useContext, useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ContextApi from '../../contextapi/Context'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';


function Cart() {

    const {state, dispatch} = useContext(ContextApi)

   const [quantity, setQuantity] = useState(false);

    const deleteItem = (id) =>{
      dispatch({type: 'REMOVE_FROM_CART', payload: id})
    }


    const incrementQuantity = (id) =>{
      dispatch({type: 'INCREMENT_QUANTITY', payload: id})
      setQuantity(!quantity);
    }

    const decrement = (id) =>{
      dispatch({type: 'DECREMENT_QUANTITY', payload: id})
      setQuantity(!quantity);
    }

  return (
   <>
       <Header />
          <main>
               <section className='cart-cols'>
                      <div className='cart_container max-w-bodyWidth mx-auto tablet:p-4 mobile:px-4'>
                           <div>
                               {
                                  state.cart.length === 0 ? (
                                      <div className='cart_empty my-40'>
                                           <p className='font-secondary text-2xl leading-10  font-semibold lead'>Your cart items is 0</p>
                                           <div className='return_to_shop py-4'>
                                                <Link className='border-2 py-4 px-4' to='/products'>Return To Shop</Link>
                                            </div>
                                      </div>
                                  ) :(
                                    <div>
                                           <div className='single_product_details_row grid grid-cols-5 mt-16 py-6 border-2 shadow-md justify-center items-center text-center rounded-sm'>
                                                  <div className='single_product_title'>
                                                       <p className='single_product_name font-secondary font-semibold text-2xl leading-10 mobile:leading-4 mobile:text-xs'>Product Name</p>
                                                  </div>
                                                  <div className='single_product_price '>
                                                       <p className='font-secondary font-semibold text-2xl leading-10 mobile:leading-4 mobile:text-xs'>Price</p>
                                                  </div>
                                                  <div className='single_product_quantity '>
                                                       <p className='font-secondary font-semibold text-2xl leading-10 mobile:leading-4 mobile:text-xs'>Quantity</p>
                                                  </div>
                                                  <div className='single_product_subtotal '>
                                                       <p className='font-secondary font-semibold text-2xl leading-10 mobile:leading-4 mobile:text-xs'>Subtotal</p>
                                                  </div>

                                                  <div className='delete_item'>
                                                     <p className='font-secondary font-semibold text-2xl leading-10 mobile:leading-4 mobile:text-xs'>Remove Item</p>
                                                  </div>
                                           </div>
                                        {

                                            state.cart.map((singleproduct) =>{
                                               return(

                                                    <div className='cart_container' key={singleproduct.id}>
                                                      <div className='single_product_row grid grid-cols-5 text-center shadow-lg mt-16 py-3 items-center border-2 rounded-md'>
                                                           <div className='single_product_img flex justify-center items-center pl-4 gap-2'>
                                                             <img src={singleproduct.image} alt='singleproduct_image' loading='lazy' className='w-[30%] h-[5vw] object-contain mobile:w-[60px] mobile:h-[60px]'/> <span className='font-secondary text-base leading-6 font-medium mobile:text-xs'>{singleproduct.productName}</span>
                                                          </div>

                                                         <div className='single_product_price'>
                                                           <p className='font-secondary text-base leading-6 font-medium mobile:text-xs'>$ {singleproduct.price}</p>
                                                          </div>

                                                          <div className='single_product_quantity py-2 px-1 border-2 w-[30%] mx-auto flex items-center justify-center gap-2 mobile:w-[75%]'>
                                                             <div className='quantity_text'>
                                                                 <p className='font-secondary text-base leading-6 font-medium'>{singleproduct.quantity}</p>
                                                             </div>
                                                             <div className='quanity_increase_decrease grid'>
                                                                   <ExpandLessIcon onClick={() => incrementQuantity(singleproduct.productName)}/>
                                                                   <KeyboardArrowDownIcon onClick = {() => decrement(singleproduct.productName)}/>
                                                             </div>
                                                          </div>

                                                          <div className='single_product_sub_total'>
                                                           <p className='font-secondary text-base leading-6 font-medium'>$  {singleproduct.quantity > 1 ? singleproduct.subtotal.toFixed(2) : singleproduct.price.toFixed(2)}</p>
                                                          </div>

                                                          <div className='remove_item_cart'>
                                                             <DeleteIcon color='#DB4444' style={{cursor: 'pointer'}} onClick={() => deleteItem(singleproduct.productName)}/>
                                                          </div>
                                                         </div>
                                                    </div>

                                               )

                                            })
                                        }
                                        <div className='cart_total return_to_shop flex justify-between my-10 mobile:grid mobile:gap-4 mobile:justify-center'>
                                            <div className='return_to_shop py-4'>
                                                <Link className='border-2 py-4 px-4' to='/products'>Return To Shop</Link>
                                            </div>

                                            <div className='cart_total w-[40%] py-4 px-4 border-2 mobile:w-[100%]'>
                                                <p>Cart Total</p>
                                                <div className='cart_total_row'>
                                                    <div className='subtotal flex items-center justify-between border-b-2 my-4 py-4'>
                                                       <p>Subtotal</p>
                                                       <p>{quantity > 1 ? state.subtotal.toFixed(2) : state.price.toFixed(2)}</p>
                                                    </div>
                                                    <div className='flex justify-between border-b-2 items-center my-4 py-4'>
                                                      <p>Shipping </p>
                                                      <p>Free</p>
                                                    </div>
                                                    <div className='total flex justify-between items-center border-b-2 my-4 py-4'>
                                                     <p>Total</p>
                                                     <p>{quantity > 1 ? state.subtotal.toFixed(2) : state.price.toFixed(2)}</p>
                                                    </div>
                                                </div>

                                                <div className='proceed_to_checkout bg-[#DB4444] py-4 text-center w-[70%] mx-auto my-4'>
                                                    <Link to='/checkout' className='text-white font-secondary text-base leading-6 font-medium'>Proceed to checkout</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  )
                               }
                           </div>
                      </div>
               </section>
          </main>
          <Footer />
   </>
  )
}

export default Cart