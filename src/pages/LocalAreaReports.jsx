import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'


function LocalAreaReports() {

  //state management 
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error , setError] = useState(null)
 
  
 //use navigate 
 const navigate = useNavigate() //react router dom

//geolocation api submit function 
const handleCurrentPosition  =  () => {

 
if(error !== null){
      
  toast(error, {
    position: "top-right",
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition:Bounce
    });

}

navigator.geolocation.getCurrentPosition(position => {
  const { latitude, longitude } = position.coords;
  // Show a map centered at latitude / longitude.
  setLongitude(longitude)
  setLatitude(latitude)
  console.log(position)
  //remove items from locastorage
  localStorage.removeItem("latitude")
  localStorage.removeItem("longitude")
  //setting the data
  localStorage.setItem("latitude",latitude)
  localStorage.setItem("longitude",longitude)
  navigate(`/local_area_reports/${longitude }`)
});
 
};




    return (
      <>
      <Navbar/>
      <main className='h-screen  bg-yellow-100 pt-12'>
             <div className=' w-[80%] mx-auto h-[90vh] py-[100px] p-6 text-black leading-9'>
                  <h1 className='font-medium text-5xl text-slate-900'>Local RSS feeds and email alerts</h1>

                  <p className='text-xl py-3'>FixMyStreet has a variety of RSS feeds and email alerts for local problems, including alerts for all problems within a particular ward or council, or all problems within a certain distance of a particular location.</p>

                  <p className='text-xl py-3'>To find out what local alerts we have for you, please enter your postcode or street name and area</p>
                  {/* form */}

         
               <div className='flex flex-col gap-0'>
                  <p className='text-black font-bold text-lg'>Enter a nearby Zambian postcode, or street name and area:</p>
                  <span>eg. "Makeni" or "New Kasama"</span>
               </div>
               <div>
                  <form >
                 
                  <div>
                     <input
                       placeholder="Enter city name"
                       value={city}
                       onChange={event => setCity(event.target.value)}
                     type="text" className='input bg-white px-6 py-1' />
                     <button type='submit' className=' btn text-white px-5 py-1 rounded-none'>Find</button>
                     <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        transition: Bounce/>
{/* Same as */}

<ToastContainer />{/* notification toast */}
                   </div>
                    <button type='button' className='btn btn-link' onClick={handleCurrentPosition}>Get current position</button>
                
                  </form>
               </div>
          





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