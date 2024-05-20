import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="hero min-h-[80vh] pt-12" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1550615517-5045b1e87082?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
        <div className="hero-overlay bg-opacity-80"></div>
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
