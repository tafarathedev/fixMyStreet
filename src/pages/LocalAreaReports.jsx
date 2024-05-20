import React from 'react'
import Map from '../components/Map'
import Navbar from '../components/Navbar'

function LocalAreaReports() {
    return (
      <>
      <Navbar/>
        <main>
                <div className='h-[100vh] flex flex-row-reverse  py-[80px]'>
                            <div className='w-[30%] h-[100%]'>
                                <h1 className='text-black'>Menu Here</h1>
                            </div>

                            <div className='w-[100%]'>
                                <Map />
                            </div>
                    </div>
        </main>
      
      </>
              
                

    )
}

export default LocalAreaReports
