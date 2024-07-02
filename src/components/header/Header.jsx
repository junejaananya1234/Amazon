import React from 'react'
import { logo } from "../../assets/index"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


function Header() {
    return (

        <div className='w-full sticky top-0 z-50'>
          <div>
              {/* -----------------header top --------------- */}
              <div className='w-full bg-amazon_blue text-white px-6 py-3 flex items-center gap-5  '>
                {/* logo div  */}
                <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer'>
                    <img className='w-24 mt-2' src={logo} alt="Logo" />
                </div>
                 
                {/* location div  */}
                <div>
                  <p className='text-ligth_text'><LocationOnIcon/>Deliver to</p>
                  <p> Abhinandan <span>India</span></p>
                </div>
                {/* search div  */}
                <div className='h-10 rounded-md flex flex-grow relative bg-white'>
                   <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2 ' type="text" />
                   <span className='h-full w-12 flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
                    <SearchIcon/>
                   </span>
                </div>

                {/* authentication div  */}
                <div>
                    {/* <Link to='/signin' className='text-light_text'>
                        Hello, sign in
                    </Link> */}
                    <p className='font-bold'>Accounts and Lists</p>
                </div>
               
                {/* returns div  */}
                <div>
                    <p className='text-ligth_text'>Returns</p>
                    <p className='font-bold'>&Orders</p>
                </div>

                 {/* cart div  */}
                <div>
                   <ShoppingCartIcon/>
                   <p className='text-xs font-semibold ,t-3 text-whiteText'>
                    Cart  <span className='absolute text-xs top-3  font-semibold bg-amazon_yellow p-0.5 rounded-full text-amazon_blue  '>0</span>
                    </p>
                  
                </div>




            </div>

          </div>
            {/* -----------------header bottom --------------- */}
            <div className='w-full bg-amazon_light_blue text-white px-6 py-2 flex items-center gap-5 '>
              <div>all</div>
              
            </div>
        </div>
    )
}

export default Header