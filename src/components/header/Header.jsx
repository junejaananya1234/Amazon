import React, { useContext, useState } from 'react';
import { logo } from "../../assets/index";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { ecomContext } from '../../App';

function Header() {
  const { cart } = useContext(ecomContext);
  const [input, setInput] = useState("");

  return (
    <div className='w-full sticky top-0 z-50'>
      <div>
        {/* -----------------header top --------------- */}
        <div className='w-full bg-amazon_blue text-white px-6 py-1 flex items-center gap-5'>
          {/* logo div  */}
          <div className='flex items-center text-center border border-transparent hover:border-white cursor-pointer p-2'>
            <Link to='/'>
              <img className='w-24' src={logo} alt="Logo" />
            </Link>
          </div>

          {/* location div - hidden on small screens */}
          <div className='hidden md:inline-flex flex-col border border-transparent hover:border-white cursor-pointer text-sm p-2'>
            <p className='text-light_text flex items-center'>
              <LocationOnIcon />
              Deliver to
            </p>
            <p>
              Abhinandan <span>India</span>
            </p>
          </div>

          {/* search div  */}
          <div className='h-10 rounded-md flex flex-grow relative bg-white'>
            <input
              className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2'
              type="text"
            />
            <span className='h-full w-12 flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
              <SearchIcon />
            </span>
          </div>

          {/* authentication div - hidden on small screens */}
          <div className='hidden md:flex md:flex-col md:items-start border border-transparent hover:border-white cursor-pointer p-2'>
            <Link to='/signin' className='text-light_text text-base md:text-sm text-white'>
              Hello, sign in
              <p className='font-bold text-sm md:text-base'>
                Accounts and Lists
              </p>
            </Link>
          </div>

          {/* returns div - hidden on small screens */}
          <div className='hidden md:flex flex-col items-start justify-center border border-transparent hover:border-white cursor-pointer p-2'>
            <p className='text-light_text'>Returns</p>
            <p className='font-bold'>&Orders</p>
          </div>

          {/* cart div  */}
          <div className='relative flex items-center border border-transparent hover:border-white cursor-pointer p-2'>
            <Link to="/cart" className='flex items-center text-whiteText'>
              <ShoppingCartIcon />
              <p className='text-base font-semibold mt-4'>
                Cart
                <span className='absolute right-5 bottom-7 px-2 py-1 text-xs font-semibold bg-amazon_yellow rounded-full text-amazon_blue'>
                  {cart.length}
                </span>
              </p>
            </Link>
          </div>

          {/* log out div  */}
          <div className='hidden md:flex md:flex-col md:items-start border border-transparent hover:border-white cursor-pointer p-2'>
            <Link to="/userprofile">
              <LogoutIcon />
            </Link>
          </div>
        </div>
      </div>

      {/* -----------------header bottom - hidden on small screens --------------- */}
      <div className='hidden md:flex w-full bg-amazon_light_blue text-white px-6 py-2 items-center gap-5'>
        <div>All</div>
      </div>
    </div>
  );
}

export default Header;
