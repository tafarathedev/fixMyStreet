import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


function ProblemDashboard() {
const [data , setData] = useState([])


useEffect(() => {
    // Function to fetch data from the JSON server
    const fetchData = async () => {
      try {
        // Make a GET request to the JSON server endpoint
        const response = await axios.get('http://localhost:5000/reports'); // Replace 'http://localhost:3000/reports' with your JSON server endpoint
        // Set the fetched data in the state
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once


  console.log(data)
  return (
    <div className="flex flex-col space-y-4 pb-12">
      <div className="flex items-center justify-between">
      
        <div className="flex space-x-4">
          <button className="btn btn-link px-3 py-1  rounded">Category</button>
          <button className="btn btn-link px-3 py-1  rounded">Ascending</button>
          <button className="btn btn-link px-3 py-1  rounded">New/Old</button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {data.map(problem => (
         <Link   key={problem.id} className="flex flex-col flex-grow w-64 border gap-6 p-4 space-y-2">
          <div>
         <img src={problem.image} alt="Problem" className="w-full h-48 object-cover rounded" />
         <div className="flex flex-col flex-grow">
           <h3 className="font-semibold">{problem.title}</h3>
           <p className="text-gray-500">{`${problem.date} ${problem.time}`}</p>
         </div>
       </div>
       </Link>
        ))}
      </div>
      
      <p className="text-gray-900 font-bold text-xls">Total Problems: {data.length}</p>
    </div>
  );
}

export default ProblemDashboard;
