import React from 'react'
import Map from '../components/Map'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function LocalAreaReports() {
    return (
      <>
      <Navbar/>
        <main>
                <div className='h-[100vh] flex  '>
                            <div className='w-[30%] h-[100vh]'>
                                menu here
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
