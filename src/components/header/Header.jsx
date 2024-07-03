import React, { useContext } from 'react'
import { logo } from "../../assets/index"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { ecomContext } from '../../App';


function Header() {
  const { cart } = useContext(ecomContext);
  // console.log(cart.length);

  return (

    // <div className='w-full sticky top-0 z-50'>
    //   <div>
    //     {/* -----------------header top --------------- */}
    //     <div className='w-full bg-amazon_blue text-white px-6 py-3 flex items-center gap-5  '>
    //       {/* logo div  */}
    //       <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer'>
    //         <img className='w-24 mt-2' src={logo} alt="Logo" />
    //       </div>

    //       {/* location div  */}
    //       <div className='hidden mdl:inline-flex'>
    //         <p className='text-ligth_text'><LocationOnIcon />Deliver to</p>
    //         <p> Abhinandan <span>India</span></p>
    //       </div>
    //       {/* search div  */}
    //       <div className='h-10 rounded-md hidden lgl:flex flex-grow relative bg-white '>
    //         <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2 ' type="text" />
    //         <span className='h-full w-12 flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
    //           <SearchIcon />
    //         </span>
    //       </div>

    //       {/* authentication div  */}
    //       <div>
    //         <Link to='/signin' className='text-light_text'>Hello, sign in</Link>
    //         <p className='font-bold hidden mdl:inline-flex'>Accounts and Lists</p>
    //       </div>

    //       {/* returns div  */}
    //       <div>
    //         <p className='text-ligth_text'>Returns</p>
    //         <p className='font-bold'>&Orders</p>
    //       </div>

    //       {/* cart div  */}
    //       <div>
    //         <Link to="/cart"><ShoppingCartIcon /></Link>

    //         <p className='text-xs font-semibold ,t-3 text-whiteText'>
    //           Cart  <span className='absolute text-xs top-3  font-semibold bg-amazon_yellow p-0.5 rounded-full text-amazon_blue  '>{cart.length}</span>
    //         </p>

    //       </div>

    //     </div>

    //   </div>
    //   {/* -----------------header bottom --------------- */}
    //   <div className='w-full bg-amazon_light_blue text-white px-6 py-2 flex items-center gap-5 '>
    //     <div>all</div>

    //   </div>
    // </div>

    <div className='w-full sticky top-0 z-50'>
      <div>
        {/* -----------------header top --------------- */}
        <div className='w-full bg-amazon_blue text-white px-6 py-3 flex items-center gap-5'>
          {/* logo div  */}
          <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer'>
            <Link to='/'>
              <img className='w-24 mt-2' src={logo} alt="Logo" />
            </Link>
          </div>

          {/* location div  */}
          <div className='hidden md:inline-flex'>
            <p className='text-light_text flex items-center '>
              <LocationOnIcon />
              Deliver to
            </p>
            <p>
              Abhinandan <span>India</span>
            </p>
          </div>

          {/* search div  */}
          <div className='h-10 rounded-md hidden lg:flex flex-grow relative bg-white'>
            <input
              className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2'
              type="text"
            />
            <span className='h-full w-12 flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
              <SearchIcon />
            </span>
          </div>

          {/* authentication div  */}
          <div className='hidden sm:flex sm:flex-col sm:items-start'>
            <Link to='/signin' className='text-light_text text-base md:text-sm text-white'>
              Hello, sign in
            </Link>
            <p className='font-bold text-sm md:text-base'>
              Accounts and Lists
            </p>
          </div>

          {/* returns div  */}
          <div className='hidden lgl:flex flex-col items-start justify-center '>
            <p className='text-light_text'>Returns</p>
            <p className='font-bold'>&Orders</p>
          </div>

          {/* cart div  */}
          <div className='relative flex'>
            <Link to="/cart">
              <ShoppingCartIcon />
            </Link>
            <p className='text-sm font-bold mt-3 text-whiteText'>
              Cart
              <span className='absolute text-xs flex items-center justify-center -top-2  right-2 w-5 h-5 font-semibold bg-amazon_yellow rounded-full text-amazon_blue'>
                {cart.length}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* -----------------header bottom --------------- */}
      <div className='w-full bg-amazon_light_blue text-white px-6 py-2 flex items-center gap-5'>
        <div>All</div>
      </div>
    </div>

  )
}

export default Header