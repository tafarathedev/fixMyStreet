import React from 'react'
import Navbar from '../components/Navbar'
import Map from '../components/Map'
function LocalAreaReportId() {
    return (
        <>
        <Navbar/>
         <div className='h-[100vh] flex flex-row-reverse  py-[75px]'>
        <div className='w-[30%] h-[89vh] bg-yellow-100'>
            <h1 className='text-black font-bold text-2xl '>Menu Here</h1>
        </div>

        <div className='w-[100%]'>
            <Map />
        </div>
     </div></>
    )
}

export default LocalAreaReportId
