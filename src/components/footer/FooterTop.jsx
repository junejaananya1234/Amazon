import React from 'react'

function FooterTop() {
    return (

        <>
            <div>
                <button className='w-full bg-amazon_light_blue py-2 text-white'>Back to top</button>
                <div className='w-full  bg-slate-700 py-10 border-b-[1px] border-gray-500'>
                    <div className='max-w-5xl mx-auto flex justify-between px-4  gap-4 text-white '>
                        <div className='w-1/4'>
                            <p className='font-bold text-base mb-3 '>Get to Know Us</p>
                            <ul>
                                <li className='footerLink'><a href="">About Us</a></li>
                                <li className='footerLink'><a href="">Carrers</a></li>
                                <li className='footerLink'><a href="">Press Release</a></li>
                                <li className='footerLink'><a href="">Amazon Science</a></li>
                            </ul>
                        </div>
                        <div className='w-1/4'>
                            <p className='font-bold text-base mb-3'>Connect with Us</p>
                            <ul>
                                <li className='footerLink'><a href="">Facebook</a></li>
                                <li className='footerLink'><a href="">Twitter</a></li>
                                <li className='footerLink'><a href="">Instagram</a></li>
                            </ul>
                        </div>
                        <div className='w-1/4'>
                            <p className='font-bold text-base mb-3'>Make Money with Us</p>
                            <ul>
                                <li className='footerLink'><a href="">Sell on Amazon</a></li>
                                <li className='footerLink'><a href="">Sell under Amazon Accelerator</a></li>
                                <li className='footerLink'><a href="">Protect and Build Your Brand</a></li>
                                <li className='footerLink'><a href="">Amazon Global Selling</a></li>
                                <li className='footerLink'><a href="">Become an Affiliate</a></li>
                                <li className='footerLink'><a href="">Fulfilment by Amazon</a></li>
                                <li className='footerLink'><a href="">Advertise Your Product</a></li>
                            </ul>
                        </div>
                        <div className='w-1/4'>
                            <p className='font-bold text-base mb-3'>Let Us Help You</p>
                            <ul>
                                <li className='footerLink'><a href="">COVID-19 and Amazon</a></li>
                                <li className='footerLink'><a href="">Your Account</a></li>
                                <li className='footerLink'><a href="">Returns Center</a></li>
                                <li className='footerLink'><a href="">Recalls and Products Safety Alerts</a></li>
                                <li className='footerLink'><a href="">100% Purchase Protection</a></li>
                                <li className='footerLink'><a href="">Amazon App Download</a></li>
                                <li className='footerLink'><a href="">Help</a></li>
                            </ul>
                          
                        </div>
                        
                    </div>
                    {/* <hr className=' text-gray-900 mt-10 mb-4' /> */}
                </div>
            </div>
        </>
    )
}

export default FooterTop