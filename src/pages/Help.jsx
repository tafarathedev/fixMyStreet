import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Help() {
    return (
      <>
      <Navbar />
       <main>
          <div className='flex justify-between items-center  h-[80vh]'>
            <aside className='bg-slate-100 h-full w-[300px]'>
                <h1 className='text-slate-900 font-bold  text-center py-6 text-lg'>Ask For Help</h1>

                <ul className='text-slate-900 font-medium text-sm p-4'>
                    <li className='py-3 rounded-md hover:underline hover:bg-yellow-600 bg-yellow-500 p-2 my-2'><a href="">Something Here </a></li>
                    <li className='py-3 rounded-md hover:underline hover:bg-yellow-600 bg-yellow-500 p-2 my-2'><a href="">Something Here </a></li>
                    <li className='py-3 rounded-md hover:underline hover:bg-yellow-600 bg-yellow-500 p-2 my-2'><a href="">Something Here </a></li>
                    <li className='py-3 rounded-md hover:underline hover:bg-yellow-600 bg-yellow-500 p-2 my-2'><a href="">Something Here </a></li>
                </ul>
            </aside>
            <section>
                content ful 
            </section>
          </div>
       </main>
      <Footer/>
      </>
    )
}

export default Help
