import React from 'react';
import Banner from './Banner';
import Footer from './footer/Footer';
import Products from './Products';
import Hero from './Pages/Hero';


function Home() {
    return (
        <div>
           <Banner/>
<Hero/>
           <Products/>
           <Footer/>

        </div>
    );
}

export default Home;
