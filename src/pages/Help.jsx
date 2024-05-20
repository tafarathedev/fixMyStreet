import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Help() {
    return (
      <>
      <Navbar />
       <main>
          <div className='flex flex-row-reverse justify-between items-center  h-[100vh]'>
            <aside className='bg-yellow-100 h-full w-[300px] fixed pt-[100px]'>
                <h1 className='text-slate-900 font-bold  text-center py-6 text-lg'>Ask For Help</h1>

                <ul className='text-slate-900 font-medium text-sm p-4'>
                    <li className='py-3 rounded-md hover:underline hover:text-[#666] hover:bg-yellow-500  p-2 my-2'><a href="">Information For Councils </a></li>
                    <li className='py-3 rounded-md hover:underline hover:text-[#666] hover:bg-yellow-500  p-2 my-2'><a href="">Promotional Materials </a></li>
                    <li className='py-3 rounded-md hover:underline  hover:text-[#666]  hover:bg-yellow-500 p-2 my-2'><a href="">Conditions of Use </a></li>
                    <li className='py-3 rounded-md hover:underline hover:text-[#666]  hover:bg-yellow-500  p-2 my-2'><a href="">Privacy and Cookies </a></li>
                    <li className='py-3 rounded-md hover:underline hover:text-[#666] hover:bg-yellow-500  p-2 my-2'><a href="">Contact Us </a></li>
                </ul>
            </aside>
            <section className='h-[100vh] pt-[300px]'>
                content ful 
            </section>
          </div>
       </main>
      
      </>
    )
}

export default Help
