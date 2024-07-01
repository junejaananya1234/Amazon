import React from 'react'
import { logo } from "../../assets/index"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (

        <div>
            <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-5 '>
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
                
                <div>
                   <p className='text-ligth_text'>Hello sign in</p>
                   <p className='font-bold'>Accounts and Lists</p> 
                </div>



            </div>
        </div>
    )
}

export default Header