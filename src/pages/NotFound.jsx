import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
    return (
        <div>
        <header>
            <Navbar/>
        </header>
    
   <main className='h-[80vh] bg-[#ccc] flex justify-center items-center'>
        <h1 className='text-5xl text-black font-bold'>
            Page Not Found!
        </h1>
   </main>

        <footer>
            <Footer />
        </footer>
        </div>
    );
}

export default NotFound;
