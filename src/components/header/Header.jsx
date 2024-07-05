import React, { useContext, useState } from 'react';
import { logo } from "../../assets/index";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { ecomContext } from '../../App';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {

  function value(val){
    console.log(val);
  }

  const { cart , calling } = useContext(ecomContext);


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
            <span onClick={(e) => calling(e.target.value)}  className='h-full w-12 flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
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
            <p className='text-light_text text-sm'>Returns</p>
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
      <div className='w-full bg-amazon_light_blue text-white px-6 py-1'>
        <div className=' md:flex w-full items-center gap-5 justify-between mt-4 md:mt-0  '>
          <div className='w-full md:w-1/2 flex flex-wrap md:flex-nowrap justify-between font-semibold md:text-sm'>
            <Link to="/"><button className="border border-transparent hover:border-white p-1 text-xs md:p-2 md:text-sm" value="shoes" onClick={(e) => calling(e.target.value)}>Shoes</button></Link>
            <Link to="/"><button className="border border-transparent hover:border-white p-1 text-xs md:p-2 md:text-sm" value="watches" onClick={(e) => calling(e.target.value)} >Watches</button></Link>
            <Link to="/"><button className="border border-transparent hover:border-white p-1 text-xs md:p-2 md:text-sm" value="clothes" onClick={(e) => calling(e.target.value)}>Clothes</button></Link>
            <Link to="/"><button className="border border-transparent hover:border-white p-1 text-xs md:p-2 md:text-sm" value="phone" onClick={(e) => calling(e.target.value)} >Phones</button></Link>
            <Link to="/"><button className="border border-transparent hover:border-white p-1 text-xs md:p-2 md:text-sm" value="furniture" onClick={(e) => calling(e.target.value)} >Furniture</button></Link>
            <Link to="/"><button className="border border-transparent hover:border-white p-1 text-xs md:p-2 md:text-sm" value="grocery" onClick={(e) => calling(e.target.value)}>Groceries</button></Link>
          </div>
          <div className="hidden md:block bg-white rounded-sm shadow-md text-black mt-2 md:mt-0">
            <select id="filter" onChange={(e)=>calling(e.target.value)} className=" border rounded-md w-full md:w-auto">
              <option value="" disabled selected hidden className='font-semibold'>Filter</option>
              <option value="men">Men's</option>
              <option value="women">Women's</option>
              <option value="kids">Kid's</option>
              <option value="girls">Girls's</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
