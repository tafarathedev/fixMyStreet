import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const HomePage = () => {
    return (
        <div className='relative '>
         <header>
            <Navbar/>
            <Hero/>
         </header>
        
         <footer className='flex justify-center items-center  '>
             <Footer/>
         </footer>
        </div>
    );
}

export default HomePage;
