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


  const { cart, calling, filterData } = useContext(ecomContext);


  return (
    <div className='w-full sticky top-0 z-50'>
       <div>
            {/* Header Top */}
            <div className='w-full bg-amazon_blue text-white px-6 py-1 flex items-center gap-5'>
                {/* Logo */}
                <div className='flex items-center text-center border border-transparent hover:border-white cursor-pointer p-2'>
                    <Link to='/'>
                        <img className='w-24 md:w-32' src={logo} alt="Logo" />
                    </Link>
                </div>

                {/* Location (hidden on small screens) */}
                <div className='hidden md:inline-flex flex-col border border-transparent hover:border-white cursor-pointer text-sm p-2'>
                    <p className='text-light_text flex items-center'>
                        <LocationOnIcon />
                        Deliver to
                    </p>
                    <p>
                        Abhinandan <span>India</span>
                    </p>
                </div>

                {/* Search */}
                <div className='h-10 rounded-md flex flex-grow relative bg-white'>
                    <input
                        className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2'
                        type="text"
                        placeholder="Search"
                        onKeyUp={(e) => calling(e.target.value)}
                    />
                    <span onClick={(e) => calling(e.target.value)} className='h-full w-12 flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
                        <SearchIcon />
                    </span>
                </div>

                {/* Authentication (hidden on small screens) */}
                <div className='hidden md:flex md:flex-col md:items-start border border-transparent hover:border-white cursor-pointer p-2'>
                    <Link to='/signin' className='text-light_text text-base md:text-sm text-white'>
                        Hello, sign in
                        <p className='font-bold text-sm md:text-base'>
                            Accounts and Lists
                        </p>
                    </Link>
                </div>

                {/* Cart */}
                <div className='relative flex items-center border border-transparent hover:border-white cursor-pointer p-2'>
                    <Link to="/cart" className='flex items-center text-white'>
                        <ShoppingCartIcon />
                        <p className='text-base font-semibold mt-4'>
                            Cart
                            <span className='absolute right-5 bottom-7 px-2 py-1 text-xs font-semibold bg-amazon_yellow rounded-full text-amazon_blue'>
                                {cart.length}
                            </span>
                        </p>
                    </Link>
                </div>

                {/* Log out (hidden on small screens) */}
                <div className='hidden md:flex md:flex-col md:items-start border border-transparent hover:border-white cursor-pointer p-2'>
                    <Link to="/userprofile">
                        <LogoutIcon />
                    </Link>
                </div>
            </div>
        </div>

      {/* -----------------header bottom - hidden on small screens --------------- */}
      <div className='w-full bg-amazon_light_blue text-white px-6 py-1'>
        <div className='flex flex-wrap justify-center md:justify-between mt-4 md:mt-0'>
          <Link to="/filteredproduct">
            <button className="border border-transparent hover:border-white p-2 text-sm md:p-3 md:text-base md:mx-1" value="shoes" onClick={(e) => filterData(e.target.value)}>Shoes</button>
          </Link>
          <Link to="/filteredproduct">
            <button className="border border-transparent hover:border-white p-2 text-sm md:p-3 md:text-base md:mx-1" value="watches" onClick={(e) => filterData(e.target.value)}>Watches</button>
          </Link>
          <Link to="/filteredproduct">
            <button className="border border-transparent hover:border-white p-2 text-sm md:p-3 md:text-base md:mx-1" value="clothes" onClick={(e) => filterData(e.target.value)}>Clothes</button>
          </Link>
          <Link to="/filteredproduct">
            <button className="border border-transparent hover:border-white p-2 text-sm md:p-3 md:text-base md:mx-1" value="phones" onClick={(e) => filterData(e.target.value)}>Phones</button>
          </Link>
          <Link to="/filteredproduct">
            <button className="border border-transparent hover:border-white p-2 text-sm md:p-3 md:text-base md:mx-1" value="furniture" onClick={(e) => filterData(e.target.value)}>Furniture</button>
          </Link>
          <Link to="/filteredproduct">
            <button className="border border-transparent hover:border-white p-2 text-sm md:p-3 md:text-base md:mx-1" value="groceries" onClick={(e) => filterData(e.target.value)}>Groceries</button>
          </Link>
          <Link to="/filteredproduct">
            <button className="border border-transparent hover:border-white p-2 text-sm md:p-3 md:text-base md:mx-1" value="laptops" onClick={(e) => filterData(e.target.value)}>Laptops</button>
          </Link>
          <Link to="/filteredproduct">
            <button className="border border-transparent hover:border-white p-2 text-sm md:p-3 md:text-base md:mx-1" value="headsets" onClick={(e) => filterData(e.target.value)}>Headsets</button>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Header;
