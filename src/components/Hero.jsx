import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="hero min-h-[80vh]" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold"><span className='text-secondary'>Report</span>, View Or Discuss <span className='text-[#121618]'>Local</span> Problems</h1>
            <p className="mb-5 text-xl text-white leading-7 ">(like graffiti, fly tipping, broken paving slabs, or street lighting)</p>
            <label className="input input-bordered flex mx-4 items-center gap-2">
                 <input type="text" className="grow text-lg " placeholder="Search" />
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
            <button className="btn mt-6 btn-[#000] text-white rounded-lg text-xl font-bold">Go...</button>
             <i className='flex justify-center items-center '><span><FaLocationDot className='text-2xl text-white'/></span><button className='btn btn-link text-2xl text-[yellow]'> Use Current Location</button></i>
          </div>
        </div>
      </div>
    );
}

export default Hero;
