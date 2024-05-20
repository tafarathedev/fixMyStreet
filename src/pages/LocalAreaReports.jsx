import React from 'react'
import Map from '../components/Map'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

function LocalAreaReports() {
    return (
      <>
      <Navbar/>
      <main className='h-[90vh]  bg-yellow-100 pt-12'>
             <div className=' w-[80%] mx-auto h-[90vh] py-[100px] p-6 text-black leading-9'>
                  <h1 className='font-medium text-5xl text-slate-900'>Report, view, or discuss local problems</h1>

                  <p className='text-xl py-3'>(like graffiti, fly tipping, broken paving slabs, or street lighting)</p>
                  {/* form */}

          <form action="" className='py-4'>
               <div className='flex flex-col gap-0'>
                  <p className='text-black font-bold text-lg'>Enter a nearby Zambian postcode, or street name and area:</p>
                  <span>eg. "Makeni" or "New Kasama"</span>
               </div>
               <div>
                   <div>
                     <input type="text" placeholder="Olympia extension" className='bg-white px-6 py-1' />
                     <a href='/local_area_reports/id' className='btn text-white px-5 py-1 rounded-none'>Find</a>
                   </div>
                   <input type="button" value='Use my current location' className='btn btn-link text-lg' />
                
               </div>
          </form>





             </div>
        </main>
      
      </>
              
                

    )
}

export default LocalAreaReports





{/* <div className='h-[100vh] flex flex-row-reverse  py-[80px]'>
            <div className='w-[30%] h-[100%]'>
                <h1 className='text-black'>Menu Here</h1>
            </div>

            <div className='w-[100%]'>
                <Map />
            </div>
    </div> */}