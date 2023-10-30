import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import ContextApi from '../../contextapi/Context';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { googleLogout } from '@react-oauth/google';

function Header() {

    const {state} = useContext(ContextApi)
    const {profile, setProfile, user, products, searchValue, setSearchValue, showproduct, setShowProduct} = useContext(ContextApi);
    const [filterproducts, setFilter] = useState(products)

    console.log(filterproducts);
      const logout = () =>{
        googleLogout()
        setProfile(null)
      }

      const productFinder = (event) =>{

         const value = event.target.value;
         setSearchValue(value)
      }

  const search = () =>{

    const filtered = products.filter((product) =>
    product.productName.toLowerCase().includes(searchValue.toLowerCase())
       );
       if(filtered.length > 0){
          setFilter(filtered);
          setShowProduct(true)
       }else{
          alert("Product Not Found")
       }
    console.log("search")
  }

  const closeSearch = () =>{
    setShowProduct(null)
    setSearchValue("")
  }

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
                                 <Link to='/login' className='hover:border-b font-normal text-lg leading-5 font-secondary mobile:text-[8px]'>Login</Link>
                             </div>

                             <div className='cart-row flex gap-4 items-center mobile:gap-2'>
                                  <div className='header-input-search relative'>
                                         <input type='text' placeholder='What are you looking for ?' className='border-0 outline-none bg-primary py-2 px-3 mobile:text-[7px] mobile:px-2 mobile:leading-4' onChange={productFinder} value={searchValue}/>
                                         <SearchIcon className='absolute right-5 top-2 mobile:!w-3 mobile:right-1 mobile:top-1' onClick={search}/>
                                  </div>

                                   <div className='realtive'>
                                   {showproduct && (
                                                   <div className='bg-black absolute right-[25%] p-8 z-50 m-8 rounded-md  mobile:right-[0%] desktop:right-[12%]'>
                                                  {filterproducts.map((product) => (
                                                   <div  key={product.id}>
                                                     <p className='text-white mb-4 font-secondary text-base font-medium leading-6'>{product.productName}</p>
                                                     <img src={product.image} alt='product_name' />
                                                     <p className='text-white mt-4 font-secondary text-base font-medium leading-6'>{product.price}</p>
                                                     <button className='text-white bg-[#DB4444] px-4 mt-3 py-3 rounded-sm font-secondary text-base font-medium leading-6' onClick={closeSearch}>Close Search</button>
                                                   </div>
                                         ))}
                                    </div>
                                  )}
                                   </div>
                                  <div className='whistlist-cart flex gap-4 items-center mobile:gap-1'>
                                     <FavoriteIcon className='mobile:!w-3' />
                                    <div className='shopping_cart relative'>
                                    <ShoppingCartIcon className='mobile:!w-3'/>
                                    {

                                        state.cart.length > 0 && (
                                            <div className='contents'>
  <span className='rounded-md px-1 text-black font-secondary text-base leading-6 font-medium relative right-[20%]'>{state.cart.length}</span>
     </div>
        )
         }
                                    </div>
                                    <div className='account_user'>
                                     {
                                        user.access_token && profile ? (
                                            <div className='user_profile flex items-center gap-2'>

                                            <img src={profile.picture} alt='profile_picture' className='rounded-full w-10 h-auto min-w[40px] min-h-fit object-cover'/>
                                            <p className='font-secondary text-base leading-6 font-semibold'>{profile.name}</p>
                                            <LogoutIcon onClick={logout} className='cursor-pointer'/>
                                            </div>
                                        ) :(
                                            <AccountCircleIcon style={{cursor: 'pointer'}}/>

                                        )
                                     }

                                    </div>
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