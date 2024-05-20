import React from 'react';
import { Link } from 'react-router-dom';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
const Navbar = () => {  





  const isAuthenticated = useIsAuthenticated() //authed
    return (
        <div className="navbar bg-white border-b shadow-lg fixed z-[99] ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="/">Report a Problem</a></li>
            <li><a href='/local_area_reports'>Local Alerts</a></li>
            <li><a href="/all_reports">All Reports</a></li>
            <li><a href='/help'>Help</a></li>
            </ul>
          </div>
          <Link to='/'  className="btn btn-ghost text-3xl font-bold text-black">fix<span className='text-primary p-0 m-0'>My</span>Street</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black text-lg">
            <li><a href="/">Report a Problem</a></li>
            <li><a href='/local_area_reports'>Local Alerts</a></li>
            <li><a href="/all_reports">All Reports</a></li>
            <li><a href='/help'>Help</a></li>
          </ul>
        </div>
        <div className="navbar-end">
        { isAuthenticated ? <a href='/account/me'  className="btn rounded-full text-white font-bold">My Accounnt</a> :
         <a href='/login' className="btn rounded-full text-white font-bold">Sign In</a>
         }
        </div>
      </div>
    );
}

export default Navbar;
