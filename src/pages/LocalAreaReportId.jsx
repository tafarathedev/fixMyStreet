import React from 'react';
import Navbar from '../components/Navbar';
import Map from '../components/Map';
import ProblemDashboard from '../components/ProblemReport';

function LocalAreaReportId() {
  // Retrieve city, latitude, and longitude from local storage
  //const storedCity = localStorage.getItem('city');
  const storedLatitude = localStorage.getItem('latitude');
  const storedLongitude = localStorage.getItem('longitude');
  //parsed to float
  const longitude = parseFloat(storedLongitude);
  const latitude = parseFloat(storedLatitude);

  // Check if values are present
  if (storedLatitude && storedLongitude) {
    // Do something with the retrieved values
    // console.log('Stored City:', storedCity);
    console.log('Stored Latitude:', storedLatitude);
    console.log('Stored Longitude:', storedLongitude);
  } else {
    console.log('No data found in local storage.');
  }

  return (
    <>
      <Navbar/>
      <div className="flex py-[75px] fixed top-0 bottom-0 left-0 right-0 overflow-hidden">
        <div className="w-[30%] bg-slate-100 h-screen p-3 overflow-y-auto">
          <h1 className="text-black font-bold text-2xl py-6">Report A Problem from below</h1>
          <p>view and create local Alerts</p>
          <div className="py-12">
             <ProblemDashboard />
          </div>
        </div>
        <div className="flex-1">
          <Map coords={{ lat: latitude, lng: longitude }} />
        </div>
      </div>
    </>
  );
}

export default LocalAreaReportId;
