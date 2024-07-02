import React from 'react'

function FooterBottom() {
    return (
        <div className='bg-amazon_light_blue py-10 border-b-[1px] border-gray-500 w-full'>
            <div className='max-w-5xl mx-auto flex items-center justify-between px-4 gap-4 text-white'>
                <div >
                    <div className='mb-4 footerLink'>
                        <p className='font-bold mb-1'>AbeBooks</p>
                        <ul className='text-gray-300'>
                            <li>Books,art</li>
                            <li>& Collections</li>
                        </ul>
                    </div>
                    <div className='footerLink '>
                        <p className='font-bold mb-1'>Shopbop</p>
                        <ul  className='text-gray-300'>
                            <li>Designer</li>
                            <li>Fashion Brands</li>
                        </ul>
                    </div>
                </div>
                <div >
                    <div className='mb-4 footerLink'>
                        <p className='font-bold mb-1'>Amazon Web Services</p>
                        <ul  className='text-gray-300'>
                            <li>Scalable Cloud </li>
                            <li>Computing services</li>
                        </ul>
                    </div>
                    <div className='footerLink'>
                        <p className='font-bold mb-1'>Amazon Business</p>
                        <ul  className='text-gray-300'>
                            <li>Everything For</li>
                            <li>Your Business</li>
                        </ul>
                    </div>
                </div>
                <div >
                    <div className='mb-4 footerLink'>
                        <p className='font-bold mb-1'>Audible</p>
                        <ul  className='text-gray-300'>
                            <li>Download</li>
                            <li>Audio Books</li>
                        </ul>
                    </div>
                    <div className='footerLink'>
                        <p className='font-bold mb-1'>Prime Now</p>
                        <ul  className='text-gray-300'>
                            <li>2-Hour Delivery</li>
                            <li>on Everyday Items</li>
                        </ul>
                    </div>
                </div>
                <div >
                    <div className='mb-4 footerLink'>
                        <p className='font-bold mb-1'>IMDb</p>
                        <ul  className='text-gray-300'>
                            <li>Movie, TV</li>
                            <li>& Celebrities</li>
                        </ul>
                    </div>
                    <div className='footerLink'>
                        <p className='font-bold mb-1'> Amazon Prime Music</p>
                        <ul  className='text-gray-300'>
                            <li>100 Millon songs, ad-free</li>
                            <li>Over 15 million podcast episodes</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='max-w-2xl  mx-auto flex items-center text-white py-10'>
                <div className='w-auto p-2 mx-auto text-sm'>
                <div className='flex gap-2'>
                    <p>Conditions of Use & Sale</p>
                    <p>Privacy Notice </p>
                    <p>Interest-Based Ads</p>
                </div>
                <div className='flex gap-4 mx-8'>
                    <p>© 1996-2024,</p>
                    <p>Amazon.com, Inc. or its affiliates</p>
                </div>
                <div className='mx-20'> 
                    <p>All rights reserved <a href="" className=' hover:underline '>@Abhinandan</a></p>
                </div>
                </div>
            </div>

        </div>
    )
}

export default FooterBottom