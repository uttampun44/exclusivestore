import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';


function Header() {
  return (
    <div>
            <header>
              <div className='headerCols  bg-black'>
              {/* header top */}
                  <div className='headerContainer max-w-[875px] mx-auto'>
                      <div className='headerTop py-5 flex justify-between items-baseline tablet:px-8 laptop:px-8 mobile:px-8 mobile:flex-col'>
                          <div className='headersummerSale flex gap-4 items-baseline'>
                               <p className='text-primaryColor text-base font-normal font-secondary leading-6 mobile:text-[12px] mobile:leading-4'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                               <Link to='' className='font-semibold text-sm text-primaryColor underline leading-6 font-secondary mobile:text-[12px] mobile:leading-4'>Shop Now</Link>
                          </div>

                          <div className="select-language font-normal text-sm text-primaryColor justify-end">
                                <select className='bg-black border-black font-secondary leading-5 outline-none'>
                                       <option selected className='bg-black'>English</option>
                                       <option>Nepali</option>
                                </select>
                          </div>
                      </div>
                  </div>
              </div>

              <div className='navContainer border-b-2'>
                  <nav>
                      <div className='navmenu-row max-w-bodyWidth mx-auto pt-10 pb-5  laptop:px-8 flex justify-between tablet:px-8 items-center mobile:px-2'>
                             <div className='headTitle'>
                                  <Link to='/' className='font-secondary leading-8 text-2xl font-bold mobile:text-sm tablet:pl-0 mobile:pl-0 tablet:text-base'>Exclusive</Link>
                             </div>

                             <div className='nav-menu flex gap-4 mobile:gap-2'>
                                 <Link to='/' className='hover:border-b font-normal text-lg leading-5 font-secondary mobile:text-[8px]'>Home</Link>
                                 <Link to='/about' className='hover:border-b font-normal text-lg leading-5 font-secondary mobile:text-[8px]'>About</Link>
                                 <Link to='/signup' className='hover:border-b font-normal text-lg leading-5 font-secondary mobile:text-[8px]'>Sign up</Link>
                             </div>

                             <div className='cart-row flex gap-4 items-center mobile:gap-2'>
                                  <div className='header-input-search relative'>
                                         <input type='text' placeholder='What are you looking for ?' className='border-0 outline-none bg-primary py-2 px-3 mobile:text-[7px] mobile:px-2 mobile:leading-4'/>
                                         <SearchIcon className='absolute right-5 top-2 mobile:!w-3 mobile:right-1 mobile:top-1'/>
                                  </div>

                                  <div className='whistlist-cart flex gap-4 items-center mobile:gap-1'>
                                     <FavoriteIcon className='mobile:!w-3' />
                                     <ShoppingCartIcon className='mobile:!w-3'/>
                                  </div>
                             </div>
                      </div>
                  </nav>
              </div>
          </header>
    </div>
  )
}

export default Header