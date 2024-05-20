import React from 'react'
import Navbar from '../components/Navbar'


function MyAccountPage() {
    return (
        <div className='bg-transparent'>
        <Navbar/>
          
          <main className='h-[80vh] pt-12 bg-[#f2f2f2] text-black'>
               <div className='pt-12'>
                  <h1 className='font-bold underline text-[#333] text-2xl text-left pl-12'>My Account</h1>


                  <div className=' w-[500px] m-6 bg-yellow-500 rounded-lg'>
                    <ul className=' flex justify-between items-start hover:rounded-lg hover:bg-yellow-600 p-4'><li><span className='font-bold'>Name</span>:Tafara takaiza </li> </ul>
                    <ul className=' flex justify-between items-start hover:rounded-lg hover:bg-yellow-600 p-4'><li><span className='font-bold'>Email</span>: Tafaratakaiza19@gmail.com </li> <a href="" className='btn-link'>Change</a></ul>
                    <ul className=' flex justify-between hover:rounded-lg hover:bg-yellow-600  p-4'><li><span className='font-bold'>Phone</span>:... </li> <a href="" className='btn-link'>Add</a></ul>
                  </div>
               </div>
          </main>
    
        </div>
    )
}

export default MyAccountPage
